import React, { Component } from 'react'
import { Row, Col } from '../Grid'
import SpreadCards from '../SpreadCards'
import RaisedButton from 'material-ui/RaisedButton'
import arcanums from '../../helpers/arcanums'
import './CardDetails.sass'



class CardDetails extends Component {

  constructor(props){
    super(props)
    this.state = { showFullDescription: false }
  }

  cardInfoImage(){
    const cardImage = require(`../../assets/img/major-arcanums/rider-waite/${this.props.card}.png`)
    const arcanum = arcanums.major[this.props.card]

    if(this.props.choices.length === 1){
      return (<img src={cardImage} alt={arcanum.name} className="card-image img-responsive"/>)
    }

    return (
      <SpreadCards
        display="frontside"
        cardOverlay={this.props.card}
        choices={this.props.choices}
        spreadType={this.props.spreadType} />
    )
  }

  toggleFullDescription(){
    let showFullDescription = !this.state.showFullDescription
    this.setState({ showFullDescription })
  }

  classNames(){
    return [
      'card-info',
      this.state.showFullDescription ? 'showFullDescription' : ''
    ].join(' ')
  }

  render(){
    const arcanum = arcanums.major[this.props.card]
    let btnShowMoreStyles = { marginBottom: 25 }
    let labelShowMore = this.state.showFullDescription ? 'Fechar' : 'Ver mais'

    return (
      <div className={this.classNames()}>
        <Row>
          <Col lg="12" md="12" sm="12" xs="12">
            <Col lg="4" md="2" sm="3" xs="12">
              {this.cardInfoImage()}
            </Col>
            <Col lg="8" md="10" sm="9" sx="12">
              <h2>{arcanum.name} - Arcano {this.props.card}</h2>
              <h3>{arcanum.attribute}</h3>
              <p><b>Positivo:</b> {arcanum.positive} </p>
              <p><b>Negativo:</b> {arcanum.negative}</p>
              <div className="description">
                <p>{arcanum.description}</p>
              </div>
              <RaisedButton
                label={labelShowMore}
                style={btnShowMoreStyles}
                onClick={() => this.toggleFullDescription()} />
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CardDetails
