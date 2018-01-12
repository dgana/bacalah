import React, { Component } from 'react'

// Plugin Dependencies
import Select from 'react-select'
import Dropzone from 'react-dropzone'
import ReactTooltip from 'react-tooltip'
import decode from 'jwt-decode'

// GraphQL
import { categoriesQuery, addNewsMutation, allNewsQuery } from './gql/'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

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
        picturePath: 'https://1.bp.blogspot.com/-tJRxuq_3KCI/WOrGu_7tTDI/AAAAAAAAAN4/I1P_UZP_7lcNpJRljlqzBzF4ZjhwmHQtwCLcB/s1600/batam.jpg',
        picture: []
      },
      titleVal: false,
      contentVal: false
    }
  }

  _onDrop = (imgFiles,key) => {
    const newForm = {
     ...this.state.form,
     [key]: imgFiles
    }
    this.setState({
      form: newForm
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
    const { title, content, picturePath } = this.state.form
    const { titleVal, contentVal, form } = this.state
    if (title.length === 0) {
      this.setState({ titleVal: true })
      setTimeout(() => this.setState({ titleVal: false }), 5000)
    } else if (content.length < 20) {
      this.setState({ contentVal: true })
      setTimeout(() => this.setState({ contentVal: false }), 5000)
    } else {
      this.props.submitAddNews(form)
      .then(res => {
        this.setState({
          form: {
            userId: '',
            categoryId: '',
            title: '',
            content: '',
            featured: false,
            picturePath: 'https://1.bp.blogspot.com/-tJRxuq_3KCI/WOrGu_7tTDI/AAAAAAAAAN4/I1P_UZP_7lcNpJRljlqzBzF4ZjhwmHQtwCLcB/s1600/batam.jpg',
            picture: []
          }
        })
      })
    }
  }

  componentDidMount() {
    const data = localStorage.getItem('bacalahuser')
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
    const { loading, error, categories } =  this.props.data
    const { titleVal, contentVal, form } = this.state

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
          <label>Judul</label>
          <p style={{color: 'red', transition: '0.6s', marginBottom: 0, opacity: titleVal ? 1 : 0, visibility: titleVal ? 'visible' : 'hidden'}}>Judul tidak boleh kosong</p>
          <input
            name="title"
            type="text"
            className="form-control"
            style={{marginBottom:12, height: 40, borderRadius: 2}}
            rows="4"
            value={form.title}
            placeholder="Masukkan judul berita anda disini"
            onChange={this._handleOnChange} />
          <label>Konten Berita</label>
          <p style={{color: 'red', transition: '0.6s', marginBottom: 0, opacity: contentVal ? 1 : 0, visibility: contentVal ? 'visible' : 'hidden'}}>Konten berita minimal 20 karakter</p>
          <textarea
            name="content"
            className="form-control"
            style={{marginBottom:12, borderRadius: 2}}
            rows="15"
            value={form.content}
            placeholder="Masukkan isi berita anda disini"
            onChange={this._handleOnChange}>
          </textarea>
        </div>
        <ReactTooltip id="upload-gambar" place={"bottom"} />
        <div className="form-group">
          <label style={{display: 'block'}}>Upload Gambar</label>
          <Dropzone
            data-for="upload-gambar"
            data-tip="Unggah gambar dimensi 4 : 3"
            data-iscapture="true"
            style={{height: 130}}
            onDrop={imgFiles => this._onDrop(imgFiles, 'picture')}
            className='dropzone'
            style={{width: '35%'}}
            activeClassName='active-dropzone'
            multiple={true}>
            { form.picture.length !== 0 ?
              form.picture.map((file, index) => (
              <div key={index} className="dropzone-width dropzone dropzone-square-sm" style={{width:'100%', height: 130}}>
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
        <div className="col-md-12">
          <input onClick={() => this._handleAddNews()} type="submit" value="Tambah Berita" className="btn pull-right" />
        </div>
      </div>
    )
  }
}

export default compose(
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
