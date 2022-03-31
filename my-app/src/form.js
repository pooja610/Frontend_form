import React, { Component} from 'react';

export default class Form extends Component {

    userData;

    constructor(props){
        super(props);

        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            price: '',
            amount: '',
            select: ''
        }

    }

    onChangePrice(e){
        this.setState({price: e.target.value})
    }
    onChangeAmount(e){
        this.setState({amount: e.target.value})
    }
    onChangeSelect(e){
        this.setState({select: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
    }

    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'));
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render(){
        return (
            <div className= "container">
                <form onSubmit={this.onSubmit}>
                <div className = "form-group">
                    <label>Price</label>
                    <input type = "number" step={'0.00001'} className='form-control' value = {this.state.price} onChange = {this.onChangePrice}/>
                </div>
                <div className = "form-group">
                    <label>Amount</label>
                    <input type = "number" className='form-control' value = {this.state.amount} onChange = {this.onChangeAmount}/>
                </div>
                <div className = "form-group">
                    <label>Select</label>
                    <input type = "number" className='form-control' value = {this.state.select} onChange = {this.onChangeSelect}/>
                </div>
                <button type = "submit" className='btn btn-primary btn-block'>Submit</button>
                </form>
                
            </div>
        )
    }
}