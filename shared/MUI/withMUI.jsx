import React, { Component } from "react";
import { MuiThemeProvider, getMuiTheme } from "material-ui/styles";
import { Head } from "next";

import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_TWO,
  PRIMARY_COLOR_TREEE,
  ACCENT_COLOR_ONE,
  ACCENT_COLOR_TWO,
  ACCENT_COLOR_THREE
} from "./theme";

const withMUI = ComposedComponent => {
  class HOC extends Component {
    static async getInitialProps(ctx) {
      const { req } = ctx;
      const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
      //   const subProps = await ComposedComponent.getInitialProps(ctx);
      return {
        // ...subProps,
        userAgent
      };
    }
    render() {
      const { userAgent } = this.props;
      const Lato = "lato, sans-serif";
      const muiTheme = getMuiTheme(
        {
          fotnFamily: Lato,
          paletter: {
            primary1Color: PRIMARY_COLOR,
            primary2Color: PRIMARY_COLOR_TWO,
            primary3Color: PRIMARY_COLOR_TREEE,
            accent1Color: ACCENT_COLOR_ONE,
            accent2Color: ACCENT_COLOR_TWO,
            accent3Color: ACCENT_COLOR_THREE
          },
          appBar: {
            height: 50
          }
        },
        {
          userAgent
        }
      );
      return (
        <div>
          <Head>
            <title>NextJS blog</title>
            <meta
              name="viewport"
              content="initial-scale=1.0,width=device-width"
            />
            <link href="https://fonts.googleapis.com/css?family=Lato" />
          </Head>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Component {...this.props} />
          </MuiThemeProvider>
        </div>
      );
    }
  }
  return HOC;
};
export default withMUI;
