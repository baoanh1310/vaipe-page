import React from "react";
import "./publication.sass";

const Publications = () => {
  return (
    <>
      <div 
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/publication.png")}"`
        }}
      >Publications</div>
      {/* <div className="tba">TO BE ANNOUNCED</div> */}
      <div className="publications">
        <div className="publications_journals">
          <div className="title">Journal papers</div>
          <p>[1] Hong Son Vu, Ngan Nguyen, Nam Ha-Van, Chulhun Seo, and Minh Thuy Le, 
            “Multiband Ambient RF Energy Harvesting for Autonomous IoT Devices", 
            IEEE MICROWAVE AND WIRELESS COMPONENTS LETTERS, 2020.</p>
          <p>[2] Kien Nguyen, Phi Le Nguyen, Zhetao Li, Hiroo Sekiya, 
            “Empowering 5G Mobile Devices with Network Softwarization”, 
            IEEE Transactions on Network and Service Management, 
            Vol. 18, Issue 3, pp. 2492-2501, September 2021.</p>
          <p>[3] Minh Hieu Nguyen, Phi Le Nguyen, Kien Nguyen, Van An Le, Thanh-Hung Nguyen, Yusheng Ji, 
            “PM2.5 Prediction Using Genetic Algorithm-based Feature Selection and Encoder-Decoder Model”,
             IEEE Access, Vol. 9, pp. 57338 - 57350, 2021.</p>
          <p>[4] Chen Xuan, Kien Nguyen, Hiroo Sekiya,
             “An Experimental Study on Performance of Private Blockchain in IoT Applications”, 
             Elsevier Peer-to-Peer Networking and Applications,
              Vol. 14, issue 5, pp. 3075–3091, September 2021.</p>
          <p>[5] Nguyen, Cam Ly, Orestis Georgiou, Gabriele Gradoni, and Marco Di Renzo. 
            "Wireless Fingerprinting Localization in Smart Environments using Reconfigurable Intelligent Surfaces." 
            IEEE Access (2021).</p>
          <p>[6] Minh Q. Dinh, Minh Thuy Le, 
            "Triplexer-Based Multiband Rectenna for Ambient RF Energy Harvesting from 3G/4G and Wi-Fi",
             IEEE Microwave and Wireless Components Letters, Vol. 31, No.9, 1094-1097</p>
          <p>[7] Minh Dinh, Nam Ha-Van, Nguyen Thanh Tung, Minh Thuy Le, 
            “Dual-Polarized Wide-Angle Energy Harvester for Self-Powered IoT Devices”, 
            IEEE Access 9, 103376-103384</p>
        </div>
        <div className="publications_conferences">
          <div className="title">Conference papers</div>
          <p>[1] Viet Dung Nguyen, Phi Le Nguyen, Trung Hieu Nguyen, Kien Nguyen, 
            Phan Thuan Do, “An (e-1)/(2e-1)-Approximation Algorithm for Maximizing the Coverage 
            Capability in Vehicle-based Mobile Air Quality Monitoring Systems”, 
            The 19th IEEE International Symposium on Network Computing and Applications (NCA 2020).</p>
          <p>[2] La Van Quan, Phi Le Nguyen, Thanh-Hung Nguyen, Kien Nguyen, “Q-learning-based,
             Optimized On-demand Charging Algorithm in WRSN”, The 19th IEEE International 
             Symposium on Network Computing and Applications (NCA 2020).</p>
          <p>[3] Nguyen Thi Hanh, Huynh Thi Thanh Binh and Nguyen Van Son, "Minimal Relay Node Placement for 
             Ensuring Network Connectivity in Mobile Wireless Sensor Networks", The 19th IEEE International 
             Symposium on Network Computing and Applications (NCA 2020).</p>
          <p>[4] Viet-Dung Nguyen, Phi Le Nguyen, Trung Hieu Nguyen, Phan Thuan Do, “A 1/2-Approximation 
             Algorithm for Target Coverage Problem in Mobile Air Quality Monitoring Systems”, The 2020 IEEE 
             Global Communications Conference (IEEE GLOBECOM), 8–10 December 2020, Taipei, Taiwan.</p>
          <p>[5] Do Bao Son, Vu Tri An, Trinh Thu Hai, Binh Minh Nguyen, Phi Le Nguyen, Huynh Thi Thanh Binh, 
             “Fuzzy Deep Q-learning Task Offloading in Delay Constrained Vehicular Fog Computing”,
             International Joint Conference on Neural Network, IJCNN 2021 (Accepted)</p>
          <p>[6] Viet An Nguyen, Viet Hung Vu, Van Sang Doan, Thanh Hung Nguyen, Do Phan Thuan, Kien Nguyen, Phi Le Nguyen, Minh Thuy Le, 
            “Realizing Mobile Air Quality Monitoring System: Architectural Concept and Device Prototype”, 
            IEEE APCC 2021, pp. , October 2021. </p>
          <p>[7] Ryota Nakada, Zhetao Li, Tingrui Pei, Kien Nguyen, Hiroo Sekiya, 
            “An IOTA-Based Micropayment System for Air Quality Monitoring Application”, 
            IEEE VTC Fall 2021, pp. 1-6, September 2021</p>
        </div>
      </div>
    </>
  );
};

export default Publications;
