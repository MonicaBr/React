import React from 'react';
import "./ListItemDetailHoc.css";

export default function ListItemDetailHoc(HocComponent) {
    return class extends React.Component {
        render() {
            return (
                <div className="hoc-container">
                    <HocComponent {...this.props}></HocComponent>
                </div>
            )
        }
    }
}