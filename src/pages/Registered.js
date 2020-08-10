import React from "react"
import { connect } from "react-redux"
import { getFavoritePostList } from "../store/webinar/action"
import WebinarSection from "../components/webinar-section/webinar-section"

class Registered extends React.Component {
  componentDidMount() {
    this.props.getFavorites({
      author: this.props.loginData.user.id,
      favourited: 1,
    })
  }

  render() {
    return (
      <WebinarSection
        loadingStatus={this.props.loadingStatus}
        webinarList={this.props.favoriteList.data}
        favorited={true}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  loginData: state.authReducer.loginUser.data,
  favoriteList: state.webinarReducer.favorite_list.data,
  loadingStatus: state.webinarReducer.favorite_list.loading,
})

const mapDispatchToProps = (dispatch) => ({
  getFavorites: (payload) => dispatch(getFavoritePostList(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Registered)
