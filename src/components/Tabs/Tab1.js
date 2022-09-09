import React from "react";
import './Tab1.css';
import Data from '../Data/dataTab1';

const Tab1 = () => {
    return (
        <div className="tab-content">
            <ul>
                {
                    Data.map((item) => {
                        return(
                            <li className="list-item" key={item.id}>
                                <div className="li-left" />
                                <div className="li-center">
                                    <p className="li-header">{item.title}</p>
                                    <p className="li-desc">{item.description}</p>
                                </div>
                                <div className="li-right">
                                    <form className="li-form">
                                        <label className="form-input"><input className="form-radioBtn" type="radio" value="64-bit (x86)" name="capacity" defaultChecked /> 64-bit (x86) </label>
                                        <label className="form-input"><input className="form-radioBtn" type="radio" value="64-bit (ARM)" name="capacity" /> 64-bit (ARM) </label>
                                        <button className="form-btn" type="submit">Select</button>
                                    </form>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Tab1;