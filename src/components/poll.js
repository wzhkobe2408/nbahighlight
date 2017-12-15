import React, { Component } from 'react'

const URL_POLL = "http://localhost:3004/teams"


class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pollTeams:[]
    }
  }

  fetchPoll() {
    fetch(`${URL_POLL}?poll=true&_sort=count&_order=desc`, {method:'GET'})
      .then(res => res.json())
        .then(json => {
          this.setState({
            pollTeams:json
          })
        })
  }

  componentDidMount() {
    this.fetchPoll();
  }

  addCount(count, id) {
    fetch(`${URL_POLL}/${id}`, {
      method:'PATCH',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({count:count + 1})
    })
      .then(() =>
        this.fetchPoll()
      )
  }

  renderPoll() {
    const position = ['1ST','2ND','3RD'];
    return this.state.pollTeams.map((item, index) => {
      return (
        <div className="poll_item" key={item.id} onClick={() => this.addCount(item.count,item.id)}>
          <img alt={item.name} src={`/images/teams/${item.logo}`} />
          <h4>{position[index]}</h4>
          <div>{item.count} Votes</div>
		  
        </div>
      )
    })
  }

  render() {
    return (
      <div className="home_poll">
        <h3>Who will be the next champion ?</h3>
        <div className="poll_container">
          {this.renderPoll()}
        </div>
      </div>
    )
  }
}

export default Poll
