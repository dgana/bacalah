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
import { Tabs, Tab } from 'react-bootstrap-tabs'

// GraphQL
import { categoriesQuery, addNewsMutation, allNewsQuery, registerMutation } from './gql/'
import { registerConfig } from './gql/config'
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
        categoryId: 'jbpx9e9l',
        title: '',
        content: '',
        featured: false,
        picturePath: '',
        picture: []
      },
      formRegister: {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        isAdmin: true
      },
      formEdit: {
        newsId: '',
        categoryId: '',
        title: '',
        content: '',
        featured: false,
        picturePath: '',
        picture: []
      },
      registerValid: false,
      usernameIsUnique: false,
      emailIsUnique: false,
      selected: 0,
      titleVal: false,
      contentVal: false,
      pictureVal: false,
      titleValEdit: false,
      contentValEdit: false,
      pictureValEdit: false,
      editorState: EditorState.createEmpty(),
      editorStateEdit: EditorState.createEmpty(),
    }
  }

  _reactTab = (index, label) => {
    if (index === 0) {
      this.setState({ selected: 0 })
    } else if (index === 1) {
      this.setState({ selected: 1 })
    } else {
      this.setState({ selected: 2 })
    }
  }

  _handleFormChangeRegister = (type, value) => {
    const newForm = {
      ...this.state.formRegister,
      [type]: value
    }
    this.setState({ formRegister: newForm })
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  onEditorStateChangeEdit = (editorStateEdit) => {
    this.setState({
      editorStateEdit,
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

  _onDropEdit = (imgFiles,key) => {
    const newForm = {
     ...this.state.formEdit,
     [key]: imgFiles
    }
    this.setState({
      formEdit: newForm
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
        formEdit: {
          ...prevState.formEdit,
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

  _handleOnSelectAllNews = e => {
    const newForm = { ...this.state.formEdit, newsId: e.value }
    this.setState({ formEdit: newForm })
  }

  _handleOnSelectCategory = e => {
    const newForm = { ...this.state.formEdit, categoryId: e.value }
    this.setState({ formEdit: newForm })
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

  _handleOnChangeEdit = event => {
    const newContent = {
      ...this.state.formEdit,
      [event.target.name]: event.target.value
    }
    this.setState({
      formEdit: newContent
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
        console.log(res)
        this.setState({
          form: {
            userId: '',
            categoryId: '',
            title: '',
            content: '',
            featured: false,
            picturePath: '',
            picture: []
          },
          editorState: EditorState.createEmpty()
        })
      })
    }
  }

  _handleEditNews = () => {

    const { title, picturePath } = this.state.formEdit
    const { titleValEdit, contentValEdit, formEdit, editorStateEdit } = this.state

    const content = draftToHtml(convertToRaw(editorStateEdit.getCurrentContent()))

    const newForm = {
      ...formEdit,
      content
    }

    if (title.length === 0) {
      this.setState({ titleValEdit: true })
      setTimeout(() => this.setState({ titleValEdit: false }), 5000)
    } else if (picturePath === "") {
      this.setState({ pictureValEdit: true })
      setTimeout(() => this.setState({ pictureValEdit: false }), 5000)
    } else if (content.length < 10) {
      this.setState({ contentValEdit: true })
      setTimeout(() => this.setState({ contentValEdit: false }), 5000)
    }  else {
      alert("LANJUT KE EDIT PROPS")
      // this.props.submitEditNews(newForm)
      // .then(res => {
      //   console.log(res)
      //   this.setState({
      //     form: {
      //       userId: '',
      //       categoryId: '',
      //       title: '',
      //       content: '',
      //       featured: false,
      //       picturePath: '',
      //       picture: []
      //     },
      //     editorStateEdit: EditorState.createEmpty()
      //   })
      // })
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

  _saveAndCloseRegister = () => {
    const { username, password, email, firstName, lastName, isAdmin } = this.state.formRegister
    if (username && password && email && firstName && lastName) {
      this.props.submitRegister(this.state.form.userId, username, password, email, firstName, lastName, isAdmin)
      .then(res => {
        const errors = res.data.addUser.errors
        const data = res.data.addUser
        if (errors) {
          console.log(errors);
          if (errors[0].message === "username must be unique") {
            this.setState({ usernameIsUnique: true })
            setTimeout(() => this.setState({ usernameIsUnique: false }), 5000)
          } else if (errors[0].message === "email must be unique") {
            this.setState({ emailIsUnique: true })
            setTimeout(() => this.setState({ emailIsUnique: false }), 5000)
          }
        } else {
          alert('Register Berhasil')
          this.setState({
            formRegister: {
              username: '',
              password: '',
              email: '',
              firstName: '',
              lastName: '',
              isAdmin: true
            }
          })
        }
      })
    } else {
      this.setState({ registerValid: true })
      setTimeout(() => this.setState({ registerValid: false }), 5000)
    }

  }

  render() {
    const {
      loading,
      error,
      categories
    } = this.props.data

    const {
      loadingAllNews,
      errorAllNews,
      allNews
    } = this.props.allNews

    const {
      titleVal,
      contentVal,
      pictureVal,
      form,
      titleValEdit,
      contentValEdit,
      pictureValEdit,
      editorState,
      editorStateEdit,
      selected,
      formRegister,
      usernameIsUnique,
      emailIsUnique,
      registerValid,
      formEdit
    } = this.state

    // if (loading) return (<p>Loading...</p>)
    if (error) return (<p>{error.message}</p>)

    const categoryOptions = categories ? categories.map(item => ({ value: item.id, label: item.name })) : [{ value: 'jbpx9e9l', label: 'News' }]
    const allNewsOptions = allNews ? allNews.map(item => ({ value: item.id, label: item.title })) : null

    return (
      <div>
        <Tabs selected={selected} onSelect={(index, label) => this._reactTab(index, label)}>
          <Tab
            headerStyle={{cursor: 'pointer', padding: '6px 24px'}}
            activeHeaderStyle={{backgroundColor: 'rgba(229, 39, 47, 0.9)', color: 'white', fontFamily: 'Open Sans, sans-serif'}}
            label="Tambah Berita">
            <br />
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
                placeholder="Isi konten berita disini...."
                style={{height: 500}}
                hashtag={{}}
              />
            </div>
            <div className="col-md-12">
              <input onClick={() => this._handleAddNews()} type="submit" value="Tambah Berita" className="btn pull-right" />
            </div>
          </Tab>
          <Tab
            label="Edit Berita"
            headerStyle={{cursor: 'pointer', padding: '6px 24px'}}
            activeHeaderStyle={{backgroundColor: 'rgba(229, 39, 47, 0.9)', color: 'white', fontFamily: 'Open Sans, sans-serif'}}>
            <br />
            { loadingAllNews ? <p>Loading...</p> :
              <div className="form-group" style={{width:200}}>
                <label>Pilih Berita</label>
                <Select
                  value={formEdit.newsId}
                  placeholder="Pilih berita"
                  clearable={false}
                  searchable={false}
                  options={allNewsOptions}
                  onChange={(e) => this._handleOnSelectAllNews(e)} />
              </div>
            }
            { loading ? <p>Loading...</p> :
              <div className="form-group" style={{width:200}}>
                <label>Kategori</label>
                <Select
                  value={formEdit.categoryId || 'jbpx9e9l'}
                  placeholder="Pilih kategori berita"
                  clearable={false}
                  searchable={false}
                  options={categoryOptions}
                  onChange={(e) => this._handleOnSelectCategory(e)} />
              </div>
            }
            <div className="form-group">
            <label>Judul<span style={{color: 'red', marginLeft: 50, transition: '0.6s', marginBottom: 0, opacity: titleValEdit ? 1 : 0, visibility: titleValEdit ? 'visible' : 'hidden'}}>Judul tidak boleh kosong</span></label>
            <input
              name="title"
              type="text"
              className="form-control"
              style={{marginBottom:12, height: 40, borderRadius: 2}}
              rows="4"
              value={formEdit.title}
              placeholder="Masukkan judul berita anda disini"
              onChange={this._handleOnChangeEdit} />

              <ReactTooltip id="upload-gambar" place={"bottom"} />
              <div className="form-group">
                <label style={{display: 'block'}}>Upload Gambar Utama  <span style={{color: 'red', marginLeft: 50, transition: '0.6s', marginBottom: 0, opacity: pictureValEdit ? 1 : 0, visibility: pictureValEdit ? 'visible' : 'hidden'}}>Gambar utama tidak boleh kosong</span></label>

                <Dropzone
                  data-for="upload-gambar"
                  data-tip="Unggah gambar dimensi 4 : 3"
                  data-iscapture="true"
                  // style={{height: 200}}
                  onDrop={imgFiles => this._onDropEdit(imgFiles, 'picture')}
                  className='dropzone'
                  style={{width: '35%'}}
                  activeClassName='active-dropzone'
                  multiple={true}>
                  { formEdit.picture.length !== 0 ?
                    formEdit.picture.map((file, index) => (
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
                    onDrop={imgFiles => this._onDropEdit(imgFiles,'picture')}
                    className='dropzone'
                    activeClassName='active-dropzone'
                    multiple={true}>
                    <div className="fa fa-plus fa-2x dropzone-box-add"></div>
                  </Dropzone>
                  }
                </Dropzone>
              </div>
              <label style={{marginTop: 12}}>Konten Berita <span style={{color: 'red', marginLeft: 50, transition: '0.6s', marginBottom: 0, opacity: contentValEdit ? 1 : 0, visibility: contentValEdit ? 'visible' : 'hidden'}}>Konten tidak boleh kosong</span></label>
              <Editor
                wrapperClassName="home-wrapper"
                editorClassName="home-editor"
                editorState={editorStateEdit}
                onEditorStateChange={this.onEditorStateChangeEdit}
                toolbar={{
                  image: { uploadCallback: uploadImageCallBack, alt: { present: true }, previewImage: true },
                  fontFamily: {
                    options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Roboto', 'Times New Roman', 'Verdana'],
                  }
                }}
                placeholder="Isi konten berita disini...."
                style={{height: 500}}
                hashtag={{}}
              />
            </div>
            <div className="col-md-12">
              <input onClick={() => this._handleEditNews()} type="submit" value="Edit Berita" className="btn pull-right" />
            </div>
          </Tab>
          <Tab
            label="Register Admin"
            headerStyle={{cursor: 'pointer', padding: '6px 24px'}}
            activeHeaderStyle={{backgroundColor: 'rgba(229, 39, 47, 0.9)', color: 'white', fontFamily: 'Open Sans, sans-serif'}}>
            <br />
            <div className="row">
              <div className="col-md-12" style={{padding: '0px 30px'}}>
                <div className="form-group">
                  <label style={{width: '100%'}}>
                    Username
                    <span style={{float: 'right', color: 'red', transition: '0.6s', opacity: usernameIsUnique ? 1 : 0, visibility: usernameIsUnique ? 'visible' : 'hidden'}}>Nama user sudah terdaftar</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={formRegister.username}
                    placeholder="Nama User"
                    onChange={(e) => this._handleFormChangeRegister('username', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formRegister.password}
                      placeholder="Password"
                      onChange={(e) => this._handleFormChangeRegister('password', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <span style={{float: 'right', color: 'red', transition: '0.6s', opacity: emailIsUnique ? 1 : 0, visibility: emailIsUnique ? 'visible' : 'hidden'}}>Email sudah terdaftar</span>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={formRegister.email}
                    placeholder="Tulis Email"
                    onChange={(e) => this._handleFormChangeRegister('email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={formRegister.firstName}
                    placeholder="Nama Awalan"
                    onChange={(e) => this._handleFormChangeRegister('firstName', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    value={formRegister.lastName}
                    placeholder="Nama Akhiran"
                    onChange={(e) => this._handleFormChangeRegister('lastName', e.target.value)} />
                </div>
                <p style={{color: 'red', marginBottom: 0, marginTop: 0, transition: '0.6s', opacity: registerValid ? 1 : 0, visibility: registerValid ? 'visible' : 'hidden'}}>Field tidak boleh ada yang kosong</p>
              </div>
              <button style={{marginLeft: 30}} className='btn btn-primary' onClick={() => this._saveAndCloseRegister()}>
                Register
              </button>
            </div>
          </Tab>
        </Tabs>

      </div>
    )
  }
}

export default compose(
  graphql(gql(allNewsQuery), { name: 'allNews' }),
  graphql(gql(categoriesQuery)),
  graphql(gql(registerMutation), {
    props: ({ mutate, ownProps }) => ({
      submitRegister: (userId, username, password, email, firstName, lastName, isAdmin) => mutate({
        variables: {
          userId,
          username,
          password,
          email,
          firstName,
          lastName,
          isAdmin
        }
      })
    })
  }),
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
          // data.allNews.push(addNews)
          // store.writeQuery({ query: gql(allNewsQuery), data })
        }
      })
    })
  })
)(Content)
