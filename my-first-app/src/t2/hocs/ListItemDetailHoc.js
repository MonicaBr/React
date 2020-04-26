import React from 'react';

export default function ListItemDetailHoc(HocComponent) {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <HocComponent {...this.props}></HocComponent>
                </div>
            )
        }
    }
}