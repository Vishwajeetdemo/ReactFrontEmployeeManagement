import React, { Component } from 'react';
import UserServices from '../servises/UserServices';

export default class UpdateProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:this.props.match.params.id,
            name:'',
            prise:'',
            quentity:''
        }
        this.changNameHandler = this.changNameHandler.bind(this);
        this.changPriseHandler = this.changPriseHandler.bind(this);
        this.changQuentityHandler = this.changQuentityHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        UserServices.findByIdPro(this.state.id).then( (res) => {
            let product= res.data;
            this.setState({name:product.name, prise:product.prise, quentity:product.quentity});
        });
    }

    updateProduct = (e) => {
        e.preventDefault();

        let product = {name:this.state.name, prise:this.state.prise, quentity:this.state.quentity};
        console.log('product =>' + JSON.stringify(product));

        UserServices.updateProduct(product, this.state.id).then( (res) => {
            this.props.history.push('/FindAll');
        });

    }

    changNameHandler = (e) => {
        this.setState({name:e.target.value});
    }

    changPriseHandler = (e) => {
        this.setState({prise:e.target.value});
    }

    changQuentityHandler = (e) => {
        this.setState({quentity:e.target.value});
    }

    cancle(){
        this.props.history.push('/FindAll');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Update Product</h3>
                             <div className="card-body">
                                 <form>
                                     <div className="form-group">
                                           <label>New Product Name</label>
                                           <input placeholder="Product Name" name="name"
                                            className="form-control" value={this.state.name}
                                              onChange={this.changNameHandler}
                                            />
                                     </div>

                                     <div className="form-group">
                                           <label>New Prise</label>
                                           <input placeholder="Product prise" name="prise"
                                            className="form-control" value={this.state.prise}
                                              onChange={this.changPriseHandler}
                                            />
                                     </div>

                                     <div className="form-group">
                                           <label>New Quentity</label>
                                           <input placeholder="Quentity" name="quentity"
                                            className="form-control" value={this.state.quentity}
                                              onChange={this.changQuentityHandler}
                                            />
                                     </div>

                                       <button className="btn btn-success" onClick={this.updateProduct}>update</button>
                                       <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={this.cancle.bind(this)}>
                                         Cancle
                                       </button>

                                 </form>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
