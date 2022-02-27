import React, { useState } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

const MyView = ({ style, hide, children }) => {
  if (hide) {
    return null;
  }
  return <View style={style}>{children}</View>;
};

// MyView.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.element,
//     PropTypes.number,
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.element,
//       ])
//     ),
//   ]).isRequired,
//   style: PropTypes.style,
//   hide: PropTypes.bool,
// };

export default MyView;
