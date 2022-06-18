import React, { useState } from "react";
import "./publication.sass";
import ScrollToTopBtn from "../../Footer/ScrollToTopBtn";
import Underline from "../../Header/Underline";

const Publications = () => {

  return (
    <div style={{backgroundColor: '#E1FBFF'}}>
      <div 
        className="block_title" style={{backgroundColor: '#E1FBFF'}}>
          <p>Publications</p>
          <Underline />
      </div>

      <div className="publications">
        <div className="papers">
          <p>[1] Nang Hung Nguyen, Phi Le Nguyen, Duc Long Nguyen, Trung Thanh Nguyen, Thuy Dung Nguyen, Thanh Hung Nguyen, Huy Hieu Pham, Truong Thao Nguyen, "FedDRL: Deep Reinforcement Learning-based Adaptive Aggregation for Non-IID Data in Federated Learning", 51st International Conference on Parallel Processing, ICPP 2022 (Accepted).</p>
          <p>[1] Nang Hung Nguyen, Phi Le Nguyen, Duc Long Nguyen, Trung Thanh Nguyen, Thuy Dung Nguyen, Thanh Hung Nguyen, Huy Hieu Pham, Truong Thao Nguyen, "FedDRL: Deep Reinforcement Learning-based Adaptive Aggregation for Non-IID Data in Federated Learning", 51st International Conference on Parallel Processing, ICPP 2022 (Accepted).</p>
          <p>[1] Nang Hung Nguyen, Phi Le Nguyen, Duc Long Nguyen, Trung Thanh Nguyen, Thuy Dung Nguyen, Thanh Hung Nguyen, Huy Hieu Pham, Truong Thao Nguyen, "FedDRL: Deep Reinforcement Learning-based Adaptive Aggregation for Non-IID Data in Federated Learning", 51st International Conference on Parallel Processing, ICPP 2022 (Accepted).</p>
        </div>
      </div>
      <ScrollToTopBtn />
    </div>
  );
};

export default Publications;