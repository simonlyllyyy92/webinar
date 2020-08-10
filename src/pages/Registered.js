import React from "react"
import { connect } from "react-redux"
import { getFavoritePostList } from "../store/webinar/action"
import WebinarSection from "../components/webinar-section/webinar-section"

class Registered extends React.Component {
  componentDidMount() {
    this.props.getFavorites({
      author: this.props.loginData.user.id,
      favourites: 1,
    })
  }

  handleOnScroll = (e) => {
    let element = e.target
    if (element.scrollWidth === element.scrollLeft + element.clientWidth) {
      console.log("get more favorites")
    }
  }
  render() {
    return (
      <WebinarSection loadingStatus={true} handleScroll={this.handleOnScroll} />
    )
  }
}

const mapStateToProps = (state) => ({
  loginData: state.authReducer.loginUser.data,
})

const mapDispatchToProps = (dispatch) => ({
  getFavorites: (payload) => dispatch(getFavoritePostList(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Registered)
