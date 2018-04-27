/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H2 from 'components/H2';
import Button from 'components/Button';
import Img from 'components/Img';
import CenteredSection from './HomePageCenteredSection';

import Section from './HomePageSection';
import { loadGiphy } from './actions';
import { makeSelectGiphySrc, makeSelectGiphyKeyword } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>
        <Helmet>
          <title>Random GIF</title>
          <meta name="description" content="A random gif from giphy API to show off redux-saga glory" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <Button
                onClick={() => { this.props.onClickRandomize(); }}
              >
                Press me
              </Button>
            </H2>
            <Section>
              {this.props.giphyKeyword}
            </Section>
            <Section>
              {this.props.giphySrc &&
                <Img src={`http://${this.props.giphySrc.split('://')[1]}`} alt={'Randomized Giphy GIF'} />
              }
            </Section>
          </CenteredSection>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  giphySrc: PropTypes.string,
  giphyKeyword: PropTypes.string,
  onClickRandomize: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onClickRandomize: () => {
      dispatch(loadGiphy());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  giphyKeyword: makeSelectGiphyKeyword(),
  giphySrc: makeSelectGiphySrc(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
