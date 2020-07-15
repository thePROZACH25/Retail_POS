import React, { Component } from 'react'

 class MenuOps extends Component {
    render() {
        return (
            <div className="col-lg-4 justify-center">
                <a style={menuStyle} href="/pos">POS</a>
                <br></br>
                <a style={menuStyle} href="/sells">SELLS</a>
                <br></br>
                <a style={menuStyle} href="/employee">EMPLOYEES</a>
                <br></br>
                <a style={menuStyle} href="/customerInfo">CUSTOMER INFO</a>
                <br></br>
                <a style={menuStyle} href="/transHistory">TRANSACTION HISTORY</a>
            </div>
        )
    }
}

const menuStyle ={
    color: "darkBlue"
}

export default MenuOps;