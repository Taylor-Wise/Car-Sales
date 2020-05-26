import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { purchasePart } from "./actions/actions";

const AdditionalFeatures = (props) => {
  const addItem = (e, item) => {
    e.preventDefault();
    props.purchasePart(item);
  };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              purchasePart={(e) => addItem(e, item)}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { additionalFeatures: state.additionalFeatures };
};

export default connect(mapStateToProps, { purchasePart })(AdditionalFeatures);
