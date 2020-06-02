'use strict'

// 浏览器原生支持特性
const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      liked: false 
    }
  }

  render() {
    if (this.state.liked) {
      // return 'You liked this.'
      return 'You liked comment number' + this.props.commentID
    }
    // 显示一个‘Like’ <button>
    return e(
      'button',
      {
        onClick: () => this.setState({ liked: true })
      },
      'Like'
    )
  }
}

// const domContainer = document.querySelector('#like_button_container')

// ReactDOM.render(e(LikeButton), domContainer)

// 复用一个组件
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10)
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    )
  })

  // 压缩代码
  /* 
  1.安装terser: npm i terser -g;
  terser -c -m -o like_button.min.js -- like_button.js 
  2.或者局部安装：
  npm init -y; npm i terser;
  npx terser -c -m -o like_button.min.js -- like_button.js 
  */