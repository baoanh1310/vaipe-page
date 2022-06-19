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
          <p>- Trung-Hieu Hoang, Mona Zehni, Huaijin Xu, George Heintz, Christopher Zallek, and Minh N. Do. "Towards a Comprehensive Solution for a Vision-based Digitized Neurological Examination" - IEEE Journal of Biomedical and Health Informatics (2022) - DOI: 10.1109/JBHI.2022.3167927.</p>
          <p>- Duc A. Tran, My T. Thai, and Bhaskar Krishnamachari (eds). "Blockchain in a nutshell" -Pre-print. Book chapter (50 pages) in "Handbook on Blockchain". Springer Nature Publisher, 2022.</p>
          <p>- Nang Hung Nguyen, Phi Le Nguyen, Duc Long Nguyen, Trung Thanh Nguyen, Thuy Dung Nguyen, Thanh Hung Nguyen, Huy Hieu Pham, Truong Thao Nguyen. "FedDRL: Deep Reinforcement Learning-based Adaptive Aggregation for Non-IID Data in Federated Learning", 51st International Conference on Parallel Processing, ICPP 2022 (Accepted).</p>
        </div>
      </div>
      <ScrollToTopBtn />
    </div>
  );
};

export default Publications;