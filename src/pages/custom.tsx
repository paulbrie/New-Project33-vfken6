import React from "react";
// import { Subject } from "subjecto"
import Component from "../teleporthq/components/component";
import styles from "../teleporthq/style.module.css"

const Custom = () => {
  return (
    <div className={styles['red']}>
      Hello Custom
      <Component heading="Some heading" />
    </div>
  );
};

export default Custom;
