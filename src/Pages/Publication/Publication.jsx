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
          <div className="paper-type">Conferences</div>
          <p>[C1] Nang Hung Nguyen, Phi Le Nguyen, Duc Long Nguyen, Trung Thanh Nguyen, Thuy Dung Nguyen, Thanh Hung Nguyen, Huy Hieu Pham, Truong Thao Nguyen. "<i>FedDRL: Deep Reinforcement Learning-based Adaptive Aggregation for Non-IID Data in Federated Learning</i>", the 51st International Conference on Parallel Processing - ICPP 2022. (Accepted).</p>
          <p>[C2] Anh Duy Nguyen, Thuy Dung Nguyen, Huy Hieu Pham, Thanh Hung Nguyen and Phi Le Nguyen, "<i>Image-based Contextual Pill Recognition with Medical Knowledge Graph Assistance</i>", 14th Asian Conference on Intelligent Information and Database Systems (ACIIDS 2022). (Accepted)</p>
          <div className="paper-type">Journals</div>
          <p>[J1] Trung-Hieu Hoang, Mona Zehni, Huaijin Xu, George Heintz, Christopher Zallek, and Minh N. Do. "<i>Towards a Comprehensive Solution for a Vision-based Digitized Neurological Examination</i>" - IEEE Journal of Biomedical and Health Informatics (2022),  IF 5.8, DOI: 10.1109/JBHI.2022.3167927.</p>
          <p>[J2] Trung Thanh Nguyen, Truong Thao Nguyen, Thanh-Hung Nguyen, Phi Le Nguyen, "Fuzzy Q-learning-based Opportunistic Communication for MEC-enhanced Vehicular Crowdsensing," IEEE Transactions on Network and Service Management, 2022. (Accepted)</p>
          <div className="paper-type">Book chapters</div>
          <p>[B1] Duc A. Tran, My T. Thai, and Bhaskar Krishnamachari (eds). "<i>Blockchain in a nutshell</i>" - Preprint. Book chapter (50 pages) in "Handbook on Blockchain" - Springer Nature Publisher, 2022.</p>
        </div>
      </div>
      <ScrollToTopBtn />
    </div>
  );
};

export default Publications;