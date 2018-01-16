import React, { Component } from 'react'

// Plugin Dependencies
import Select from 'react-select'
import Dropzone from 'react-dropzone'
import ReactTooltip from 'react-tooltip'
import decode from 'jwt-decode'
import axios from 'axios'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

// GraphQL
import { categoriesQuery, addNewsMutation, allNewsQuery } from './gql/'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

// Utility
import { uploadImageCallBack } from '../../../../util'

const closeStyle = {
  width:20,
  height:15,
  position:'absolute',
  top:'0',
  right:0,
  cursor:'pointer'
}


class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        userId: '',
        categoryId: '',
        title: '',
        content: '',
        featured: false,
        picturePath: '',
        picture: []
      },
      titleVal: false,
      contentVal: false,
      pictureVal: false,
      editorState: EditorState.createEmpty(),
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  _onDrop = (imgFiles,key) => {
    const newForm = {
     ...this.state.form,
     [key]: imgFiles
    }
    this.setState({
      form: newForm
    })
    let data = new FormData()
    data.append('file', imgFiles[0])
    axios({
      method: 'post',
      url: 'https://batam-news.appspot.com/api/uploads/single',
      data: data,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data; boundary='+data._boundary
      },
    })
    .then(res => {
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          picturePath: res.data.result
        }
      }))
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  _handleOnSelect = e => {
    const newForm = { ...this.state.form, categoryId: e.value }
    this.setState({ form: newForm })
  }

  _handleOnChange = event => {
    const newContent = {
      ...this.state.form,
      [event.target.name]: event.target.value
    }
    this.setState({
      form: newContent
    })
  }

  _onDeletePhoto = id => {
    const newPhoto = {
      ...this.state.form,
      picture: this.state.form.picture.filter((item, index) => index !== id)
    }
    this.setState({
      form: newPhoto
    })
  }

  _handleAddNews = () => {

    const { title, picturePath } = this.state.form
    const { titleVal, contentVal, form, editorState } = this.state

    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()))

    const newForm = {
      ...form,
      content
    }
    
    if (title.length === 0) {
      this.setState({ titleVal: true })
      setTimeout(() => this.setState({ titleVal: false }), 5000)
    } else if (picturePath === "") {
      this.setState({ pictureVal: true })
      setTimeout(() => this.setState({ pictureVal: false }), 5000)
    } else if (content.length < 10) {
      this.setState({ contentVal: true })
      setTimeout(() => this.setState({ contentVal: false }), 5000)
    }  else {
      this.props.submitAddNews(newForm)
      .then(res => {
        this.setState({
          form: {
            userId: '',
            categoryId: '',
            title: '',
            content: '',
            featured: false,
            picturePath: '',
            picture: []
          }
        })
      })
    }
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('bacalahuser'))
    if (data) {
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          userId: data.user.id
        }
      }))
    }

  }

  render() {
    const { loading, error, categories } = this.props.data
    const { titleVal, contentVal, form, pictureVal, editorState } = this.state

    // if (loading) return (<p>Loading...</p>)
    if (error) return (<p>{error.message}</p>)

    const categoryOptions = categories ? categories.map(item => ({ value: item.id, label: item.name })) : [{ value: 'jbpx9e9l', label: 'News' }]

    return (
      <div>
        <h3 style={{marginTop: 0, marginBottom: 0 }}>Tambah Berita</h3>
        <hr />
        { loading ? <p>Loading...</p> :
          <div className="form-group" style={{width:200}}>
            <label>Kategori</label>
            <Select
              value={form.categoryId || 'jbpx9e9l'}
              placeholder="Pilih kategori berita"
              clearable={false}
              searchable={false}
              options={categoryOptions}
              onChange={(e) => this._handleOnSelect(e)} />
          </div>
        }
        <div className="form-group">
        <label>Judul<span style={{color: 'red', marginLeft: 50, transition: '0.6s', marginBottom: 0, opacity: titleVal ? 1 : 0, visibility: titleVal ? 'visible' : 'hidden'}}>Judul tidak boleh kosong</span></label>
        <input
          name="title"
          type="text"
          className="form-control"
          style={{marginBottom:12, height: 40, borderRadius: 2}}
          rows="4"
          value={form.title}
          placeholder="Masukkan judul berita anda disini"
          onChange={this._handleOnChange} />

          <ReactTooltip id="upload-gambar" place={"bottom"} />
          <div className="form-group">
            <label style={{display: 'block'}}>Upload Gambar Utama  <span style={{color: 'red', marginLeft: 50, transition: '0.6s', marginBottom: 0, opacity: pictureVal ? 1 : 0, visibility: pictureVal ? 'visible' : 'hidden'}}>Gambar utama tidak boleh kosong</span></label>

            <Dropzone
              data-for="upload-gambar"
              data-tip="Unggah gambar dimensi 4 : 3"
              data-iscapture="true"
              // style={{height: 200}}
              onDrop={imgFiles => this._onDrop(imgFiles, 'picture')}
              className='dropzone'
              style={{width: '35%'}}
              activeClassName='active-dropzone'
              multiple={true}>
              { form.picture.length !== 0 ?
                form.picture.map((file, index) => (
                <div key={index} className="dropzone-width dropzone dropzone-square-sm" style={{width:'100%'}}>
                  <img className="dropzone-img" src={file.preview} alt="dropzone" />
                  { /*<div style={closeStyle} onClick={() => this._onDeletePhoto(index,'picture')}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                  </div> */ }
                </div>
              )) :
              <Dropzone
                data-for="upload-icon"
                data-tip="Unggah gambar dimensi 4 : 3"
                onDrop={imgFiles => this._onDrop(imgFiles,'picture')}
                className='dropzone'
                activeClassName='active-dropzone'
                multiple={true}>
                <div className="fa fa-plus fa-2x dropzone-box-add"></div>
              </Dropzone>
              }
            </Dropzone>
          </div>
          <label style={{marginTop: 12}}>Konten Berita <span style={{color: 'red', marginLeft: 50, transition: '0.6s', marginBottom: 0, opacity: contentVal ? 1 : 0, visibility: contentVal ? 'visible' : 'hidden'}}>Konten tidak boleh kosong</span></label>
          <Editor
            wrapperClassName="home-wrapper"
            editorClassName="home-editor"
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              image: { uploadCallback: uploadImageCallBack, alt: { present: true }, previewImage: true },
              fontFamily: {
                options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Roboto', 'Times New Roman', 'Verdana'],
              }
            }}
            placeholder="Begin typing..."
            hashtag={{}}
          />
          <textarea
            disabled
            style={{width:500}}
            rows={10}
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        </div>
        <div className="col-md-12">
          <input onClick={() => this._handleAddNews()} type="submit" value="Tambah Berita" className="btn pull-right" />
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(gql(allNewsQuery)),
  graphql(gql(categoriesQuery)),
  graphql(gql(addNewsMutation), {
    props: ({ mutate, ownProps }) => ({
      submitAddNews: (form) => mutate({
        variables: {
          userId: form.userId,
          categoryId: form.categoryId,
          title: form.title,
          content: form.content,
          featured: form.featured,
          picturePath: form.picturePath
        },
        update: (store, { data: { addNews } }) => {
          const data = store.readQuery({ query: gql(allNewsQuery) })
          console.log(addNews, data)
          data.allNews.push(addNews)
          store.writeQuery({ query: gql(allNewsQuery), data })
        }
      })
    })
  })
)(Content)
