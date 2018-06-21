import React  from "react";
import { Container, Header, Body, Title } from 'native-base';
import PropTypes from 'prop-types';


default export class DefaultHeader extends React.Component {



    render() {
        return (

            <Container {...this.props.container}>
                <Header {...this.props.header}>
                    <Body {...this.props.body}>
                    <Title>{this.props.title}</Title>
                    {this.props.children}
                    </Body>
                </Header>
            </Container>
        );
    }
}



DefaultHeader.propTypes = {
    container: PropTypes.object,
    header: PropTypes.object,
    body: PropTypes.object,
    title: PropTypes.string,
};

