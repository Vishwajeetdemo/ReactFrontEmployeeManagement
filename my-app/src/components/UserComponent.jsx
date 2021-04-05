import React, { Component } from 'react';
import UserServices from '../servises/UserServices';

class UserComponent extends Component {

    constructor(props){
         super(props)
        this.state = {
            users:[]
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }
    componentDidMount(){
        UserServices.findProduct().then((res) => {
            this.setState({users:res.data})
        });
    }

    editProduct(id){
        this.props.history.push("/update-product/{id}");
    }

   addProduct(){
       this.props.history.push('/add-product');
   }
    render() {
        return (
            <div>
                <h1 className="text-center">Product List</h1>
                <div className="row">
                     <button className="btn btn-primary" onClick={this.addProduct}>Add Proudect</button>
                 </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Prise</th>
                            <th>Product quentity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                               (user) =>
                               <tr key={user.id}>
                                   <td>{user.id}</td>
                                   <td>{user.name}</td>
                                   <td>{user.prise}</td>
                                   <td>{user.quentity}</td>
                                   <td>
                                     <button className='btn btn-info' onClick={ () => this.editProduct(user.id)}>Update</button>
                                   </td>
                               </tr> 
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserComponent;