import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSavedLanguage, saveLanguage } from '../utils/language'
import { getProjectBySlug } from '../data/projects'
import trainingProcessImage from '../assets/images/aptos-sybil-detector/process.png'
import confusionMatrixImage from '../assets/images/aptos-sybil-detector/matrix&ROC.png'
import thresholdTuningImage from '../assets/images/aptos-sybil-detector/Precision-Recall.png'
import forcePlotImage from '../assets/images/aptos-sybil-detector/force.png'
import apiSybilImage from '../assets/images/aptos-sybil-detector/demo2.png'
import apiNormalImage from '../assets/images/aptos-sybil-detector/demo1.png'


const content = {
  en: {
    back: '← Back to Home',
    close: 'Close',
    clickToEnlarge: 'Click to enlarge',
    category: 'Blockchain AI / Wallet Classification',
    heroTitle: 'Aptos Sybil Detector',
    heroDescription:
      'A team-based machine learning project recognized as a Top 5 Student Project at the Aptos Hackathon. Aptos Sybil Detector was designed to identify suspicious wallets through on-chain behavior analysis, combining feature engineering, model evaluation, explainability, and API-based prediction for practical wallet screening.',
    quickFacts: [
      'Project Type: Team Project',
      'Recognition: Top 5 Student Project – Aptos Hackathon',
      'My Role: ML Training Pipeline',
    ],
    sections: {
      overview: 'Project Overview',
      problem: 'Problem Background',
      role: 'My Role and Contribution',
      challenge: 'Challenge and Solution',
      process: 'Development Process',
      modeling: 'Modeling Approach',
      evaluation: 'Evaluation Results',
      threshold: 'Threshold Optimization',
      explainability: 'Model Explainability',
      api: 'Prediction API Demo',
      deployment: 'Deployment and Demo Status',
      limitations: 'Limitations',
      takeaway: 'Key Takeaway',
    },
    overviewParagraphs: [
      'Aptos Sybil Detector is a machine learning project designed to identify suspicious Aptos wallets based on on-chain behavioral patterns. The project addresses a practical challenge in the Web3 ecosystem, where wallet creation is easy, identity is difficult to verify, and reward or airdrop programs can be exploited by wallets that do not represent genuine user activity.',
      'To tackle this problem, the project combines behavioral feature analysis, feature engineering, supervised classification, and prediction workflows to distinguish Sybil wallets from Non-Sybil wallets. Beyond model training, the project also includes evaluation, threshold optimization, explainability, and API-based prediction, making it a practical prototype for wallet screening and early risk detection.',
    ],
    problemPoints: [
      'The project was created to identify suspicious Aptos wallets that may represent sybil behavior rather than genuine user activity.',
      'In this context, sybil wallets may be created or operated in large numbers to exploit airdrops, farm rewards, inflate user activity, spam on-chain interactions, or manipulate community and token distribution programs.',
      'The core task of the model is to distinguish between normal, trustworthy wallets and suspicious sybil wallets using on-chain behavioral patterns.',
      'This problem is especially important in the Aptos / Web3 ecosystem, where wallet creation is easy, identity is not directly tied to an address, and manual inspection becomes unrealistic at scale.',
    ],
    roleParagraphs: [
      'This project was developed as part of a team effort to build a complete solution. My primary responsibility was the full machine learning training workflow, including preparing the training-ready dataset, engineering features, training and comparing models, evaluating performance, and building the final prediction pipeline.',
      'Within the team, my contribution focused on turning wallet behavior data into a workable machine learning system that could support suspicious wallet detection in a practical and structured way.',
    ],
    challengeParagraphs: [
      'One of the biggest challenges in this project was data collection. In practice, many wallets that are publicly reported as suspicious or fake may no longer remain active or traceable on Aptos in a consistent way, which makes it difficult to build a reliable labeled dataset directly from ready-made public sources.',
      'To address this, I first studied the common characteristics of suspicious or sybil wallets through publicly available articles, reports, and discussions about fraudulent wallet behavior. Based on those risk patterns, I then manually examined wallets on the Aptos network using direct on-chain sources, where I could observe real-time wallet information such as transaction count, first and last transaction timing, and other behavioral signals.',
      'Using those observed risk-related characteristics, I created labels for wallets and built a dataset that could be used for model training. This approach allowed me to transform limited public evidence into a practical supervised learning setup for wallet classification.',
    ],
    dataFeatureTitle: 'Data and Feature Design',
    modelTrainingTitle: 'Model Training',
    dataAndFeaturePoints: [
      'Used an Aptos wallet behavior dataset containing labeled Sybil and Non-Sybil wallets, with on-chain behavioral features such as wallet age, balance, transaction activity, contract interactions, address interactions, and transaction timing patterns.',
      'Built both raw and engineered features, including success rate, new contract rate, balance per transaction, transaction day of week, month, and day of month.',
      'Applied cyclical encoding for time-related variables such as active hour, weekday, and month to better represent periodic behavioral patterns.',
    ],
    modelingPoints: [
      'Trained and compared multiple classifiers, including Random Forest, XGBoost, and LightGBM.',
      'The final selected solution was a LightGBM-based classification pipeline combined with preprocessing, feature selection, and SMOTE for class balancing.',
      'Built a prediction workflow that returns probability-based outputs for Sybil versus Normal classification.',
    ],
    metrics: [
      { label: 'Best CV AUC', value: '0.8412' },
      { label: 'Test Accuracy', value: '93.75%' },
      { label: 'Test AUC-ROC', value: '0.9744' },
      { label: 'Sybil Precision', value: '75.00%' },
      { label: 'Sybil Recall', value: '100.00%' },
      { label: 'Sybil F1-score', value: '0.8571' },
    ],
    evaluationParagraphs: [
      'During model selection, LightGBM achieved the best cross-validated AUC of 0.8412, making it the strongest candidate among the compared classifiers.',
      'On the independent test set, the final pipeline reached 93.75% Accuracy and 0.9744 AUC-ROC. For the Sybil class specifically, the model achieved 75.00% Precision, 100.00% Recall, and an F1-score of 0.8571.',
      'In practice, these results suggest that the model can serve as an effective screening tool. On the test set, it identified all Sybil wallets while producing only one false positive, which makes it useful for filtering suspicious wallets before manual review or reward eligibility decisions.',
    ],
    thresholdParagraphs: [
      'Threshold tuning showed that the best F1-score was obtained at a decision threshold of approximately 0.5931 instead of the default 0.5.',
      'This result is important because it demonstrates that the decision threshold does not have to remain fixed at 0.5. A better threshold can produce a more balanced trade-off between precision, recall, and F1-score depending on the application goal.',
    ],
    explainabilityParagraphs: [
      'To make individual predictions easier to interpret, the project also included a model explainability view using force-plot-style visualization.',
      'This helps show why a wallet is predicted as Sybil or Non-Sybil by highlighting which features push the prediction higher or lower for a specific case.',
    ],
    apiDemoParagraphs: [
      'The project also included a prediction API prototype for scoring new wallets. By sending a wallet address to the predict endpoint, the system returns the wallet address, predicted label, sybil probability, binary sybil flag, and confidence score.',
      'This makes the project more practical than a notebook-only experiment, because the trained model can be used as a lightweight screening service for wallet assessment and early review support.',
    ],
    deploymentParagraphs: [
      'The project also included a deployed demo workflow for wallet prediction, helping demonstrate that the model can be used beyond offline experimentation. This makes the system more practical by connecting wallet input, model inference, and prediction output in a usable flow.',
      'At this stage, the deployed version should still be presented as a prototype or demo-oriented implementation rather than a fully production-ready platform, but it clearly shows how the trained model can be turned into a usable screening service.',
    ],
    deploymentLinks: [
      { label: 'Main Project Demo', href: 'DAN_LINK_APTOS_DEMO_O_DAY' },
      { label: 'Model API Docs', href: 'DAN_LINK_APTOS_API_DOCS_O_DAY' },
    ],
    limitationParagraphs: [
      'A key limitation is that the reported independent test result comes from a small test set of only 16 samples, including just 3 Sybil wallets.',
      'For that reason, the result should be presented as a promising prototype outcome rather than final proof of production-level robustness.',
      'The model should be further validated and potentially retrained on larger and more diverse on-chain datasets to confirm generalization.',
    ],
    takeawayParagraphs: [
      'This project reflects my ability to combine technical machine learning work with analytical problem-solving. Beyond training models, I approached the problem by studying suspicious wallet behavior, identifying practical risk patterns, transforming them into usable features and labels, and building a structured ML pipeline for classification.',
      'What makes this project meaningful to me is not only the model performance, but also the process of turning an unclear real-world problem into a workable AI solution through data reasoning, feature design, evaluation, and interpretation.',
    ],
    figures: {
      process: {
        caption: 'Figure 1. End-to-end model training process for the Aptos Sybil Detector.',
        description:
          'This workflow presents the full machine learning pipeline used in the project, including data preparation, preprocessing, model comparison, evaluation, and deployment-oriented prediction design.',
      },
      evaluation: {
        caption: 'Figure 2. Confusion matrix and classification report of the final model on the independent test set.',
        description:
          'This result shows how many wallets were classified correctly and incorrectly across both classes, with a particular focus on Sybil detection performance and the balance between false positives and false negatives.',
      },
      threshold: {
        caption: 'Figure 3. Precision, recall, and F1-score across decision thresholds.',
        description:
          'This analysis shows that the decision threshold does not have to remain at the default value of 0.5. In this project, a threshold of approximately 0.59 provided a better balance between precision, recall, and F1-score.',
      },
      explainability: {
        caption: 'Figure 4. Force plot for explaining wallet-level predictions.',
        description:
          'This visualization explains why the model predicts a wallet as Sybil or Non-Sybil by showing which features push the prediction higher or lower for a specific case.',
      },
      apiSybil: {
        caption: 'Figure 5. Postman demo of the /predict API returning a Sybil classification result.',
        description:
          'This example shows how the API returns a wallet-level prediction with supporting fields such as sybil probability, binary classification, and confidence score for a wallet predicted as Sybil.',
      },
      apiNormal: {
        caption: 'Figure 6. Postman demo of the /predict API returning a Normal classification result.',
        description:
          'This example shows that the same prediction workflow can also classify wallets as Normal, while keeping a consistent API response structure for practical screening usage.',
      },
    },
  },

  vi: {
    back: '← Quay về trang chủ',
    close: 'Đóng',
    clickToEnlarge: 'Bấm để phóng to',
    category: 'AI Blockchain / Phân loại ví',
    heroTitle: 'Aptos Sybil Detector',
    heroDescription:
      'Một dự án machine learning theo nhóm, đạt Top 5 Student Project tại Aptos Hackathon. Aptos Sybil Detector được xây dựng để phát hiện các ví đáng ngờ thông qua phân tích hành vi on-chain, kết hợp feature engineering, đánh giá mô hình, giải thích dự đoán và luồng dự đoán qua API để phục vụ sàng lọc ví một cách thực tiễn.',
    quickFacts: [
      'Loại dự án: Làm theo nhóm',
      'Thành tích: Top 5 Student Project – Aptos Hackathon',
      'Vai trò của mình: Pipeline huấn luyện ML',
    ],
    sections: {
      overview: 'Tổng quan dự án',
      problem: 'Bối cảnh bài toán',
      role: 'Vai trò và đóng góp',
      challenge: 'Khó khăn và cách xử lý',
      process: 'Quy trình phát triển',
      modeling: 'Phương pháp mô hình hóa',
      evaluation: 'Kết quả đánh giá',
      threshold: 'Tối ưu ngưỡng quyết định',
      explainability: 'Giải thích mô hình',
      api: 'Demo API dự đoán',
      deployment: 'Triển khai và demo',
      limitations: 'Hạn chế',
      takeaway: 'Điểm nổi bật rút ra',
    },
    overviewParagraphs: [
      'Aptos Sybil Detector là một dự án machine learning được xây dựng để phát hiện các ví Aptos đáng ngờ dựa trên các mẫu hành vi on-chain. Dự án giải quyết một bài toán thực tế trong hệ sinh thái Web3, nơi việc tạo ví rất dễ, danh tính khó xác minh và các chương trình reward hoặc airdrop dễ bị khai thác bởi những ví không đại diện cho người dùng thật.',
      'Để giải quyết bài toán này, dự án kết hợp phân tích hành vi ví, feature engineering, supervised classification và luồng dự đoán để phân biệt ví Sybil và ví Non-Sybil. Ngoài việc huấn luyện mô hình, dự án còn bao gồm đánh giá mô hình, tối ưu threshold, giải thích dự đoán và API dự đoán, giúp nó trở thành một prototype thực tiễn cho việc sàng lọc ví và phát hiện rủi ro sớm.',
    ],
    problemPoints: [
      'Dự án được tạo ra để phát hiện các ví Aptos đáng ngờ có khả năng thể hiện hành vi Sybil thay vì hành vi người dùng thật.',
      'Trong bối cảnh này, các ví Sybil có thể được tạo hoặc vận hành hàng loạt để săn airdrop, farm reward, thổi phồng hoạt động người dùng, spam tương tác on-chain hoặc thao túng các chương trình cộng đồng và phân phối token.',
      'Nhiệm vụ cốt lõi của mô hình là phân biệt giữa ví bình thường, đáng tin cậy và các ví Sybil đáng ngờ thông qua hành vi on-chain.',
      'Bài toán này đặc biệt quan trọng trong hệ sinh thái Aptos / Web3, nơi việc tạo ví rất dễ, danh tính không gắn trực tiếp với địa chỉ ví và việc kiểm tra thủ công là gần như không khả thi ở quy mô lớn.',
    ],
    roleParagraphs: [
      'Dự án này được phát triển theo hình thức làm nhóm để xây dựng một giải pháp hoàn chỉnh. Vai trò chính của mình là phụ trách toàn bộ quy trình huấn luyện machine learning, bao gồm chuẩn bị dữ liệu phục vụ train, thiết kế feature, train và so sánh mô hình, đánh giá hiệu năng và xây dựng pipeline dự đoán cuối cùng.',
      'Trong nhóm, phần đóng góp của mình tập trung vào việc biến dữ liệu hành vi ví thành một hệ thống machine learning có thể hoạt động được, hỗ trợ phát hiện ví đáng ngờ theo cách thực tiễn và có cấu trúc.',
    ],
    challengeParagraphs: [
      'Một trong những khó khăn lớn nhất của dự án là thu thập dữ liệu. Trên thực tế, nhiều ví đã được công khai là đáng ngờ hoặc giả mạo có thể không còn hoạt động hoặc khó truy vết lại một cách nhất quán trên Aptos, khiến việc xây dựng một bộ dữ liệu gán nhãn từ các nguồn sẵn có trở nên khó khăn.',
      'Để xử lý điều đó, mình trước tiên nghiên cứu các đặc điểm phổ biến của ví đáng ngờ hoặc ví Sybil từ các bài viết, báo cáo và thảo luận công khai về hành vi gian lận. Từ các mẫu rủi ro đó, mình tiếp tục kiểm tra thủ công các ví trên mạng Aptos thông qua nguồn on-chain trực tiếp, nơi mình có thể quan sát thông tin theo thời gian thực như số lượng giao dịch, thời điểm giao dịch đầu tiên và cuối cùng, cùng các tín hiệu hành vi khác.',
      'Dựa trên các đặc điểm rủi ro đã quan sát, mình gán nhãn cho các ví và xây dựng một bộ dữ liệu có thể dùng để huấn luyện mô hình. Cách tiếp cận này giúp mình biến các bằng chứng công khai còn hạn chế thành một bài toán supervised learning khả thi cho việc phân loại ví.',
    ],
    dataFeatureTitle: 'Dữ liệu và thiết kế đặc trưng',
    modelTrainingTitle: 'Huấn luyện mô hình',
    dataAndFeaturePoints: [
      'Sử dụng bộ dữ liệu hành vi ví Aptos có gán nhãn Sybil và Non-Sybil, với các đặc trưng on-chain như tuổi ví, số dư, mức độ giao dịch, tương tác contract, tương tác địa chỉ và các mẫu thời gian giao dịch.',
      'Xây dựng cả đặc trưng thô và đặc trưng tự tạo như success rate, new contract rate, balance per transaction, ngày trong tuần, tháng và ngày trong tháng.',
      'Áp dụng cyclical encoding cho các biến liên quan đến thời gian như active hour, weekday và month để biểu diễn tốt hơn tính chu kỳ trong hành vi ví.',
    ],
    modelingPoints: [
      'Huấn luyện và so sánh nhiều mô hình phân loại khác nhau, bao gồm Random Forest, XGBoost và LightGBM.',
      'Giải pháp cuối cùng được chọn là pipeline phân loại dựa trên LightGBM, kết hợp preprocessing, feature selection và SMOTE để cân bằng lớp.',
      'Xây dựng luồng dự đoán trả về xác suất và nhãn phân loại cho Sybil và Normal.',
    ],
    metrics: [
      { label: 'CV AUC tốt nhất', value: '0.8412' },
      { label: 'Độ chính xác test', value: '93.75%' },
      { label: 'Test AUC-ROC', value: '0.9744' },
      { label: 'Precision lớp Sybil', value: '75.00%' },
      { label: 'Recall lớp Sybil', value: '100.00%' },
      { label: 'F1-score lớp Sybil', value: '0.8571' },
    ],
    evaluationParagraphs: [
      'Trong quá trình chọn mô hình, LightGBM đạt cross-validated AUC tốt nhất là 0.8412, trở thành mô hình mạnh nhất trong số các bộ phân loại được so sánh.',
      'Trên tập test độc lập, pipeline cuối cùng đạt 93.75% Accuracy và 0.9744 AUC-ROC. Riêng đối với lớp Sybil, mô hình đạt 75.00% Precision, 100.00% Recall và F1-score là 0.8571.',
      'Về mặt thực tiễn, các kết quả này cho thấy mô hình có thể hoạt động như một công cụ sàng lọc hiệu quả. Trên tập test, nó phát hiện được toàn bộ ví Sybil trong khi chỉ tạo ra một false positive, phù hợp cho việc lọc ví đáng ngờ trước khi kiểm tra thủ công hoặc đánh giá eligibility cho reward.',
    ],
    thresholdParagraphs: [
      'Quá trình threshold tuning cho thấy F1-score tốt nhất đạt được tại ngưỡng quyết định khoảng 0.5931 thay vì mức mặc định 0.5.',
      'Điều này quan trọng vì nó cho thấy threshold không nhất thiết phải cố định ở 0.5. Một ngưỡng tốt hơn có thể giúp cân bằng tốt hơn giữa precision, recall và F1-score tùy theo mục tiêu sử dụng.',
    ],
    explainabilityParagraphs: [
      'Để việc giải thích dự đoán cho từng ví trở nên rõ ràng hơn, dự án cũng tích hợp phần trực quan hóa giải thích mô hình theo kiểu force plot.',
      'Điều này giúp cho thấy vì sao một ví được dự đoán là Sybil hay Non-Sybil bằng cách làm nổi bật các feature đang đẩy kết quả lên hoặc kéo kết quả xuống ở từng trường hợp cụ thể.',
    ],
    apiDemoParagraphs: [
      'Dự án cũng bao gồm một prototype API dự đoán để chấm điểm các ví mới. Bằng cách gửi địa chỉ ví vào endpoint predict, hệ thống trả về địa chỉ ví, nhãn dự đoán, xác suất Sybil, cờ nhị phân Sybil và điểm tin cậy.',
      'Điều này làm cho dự án thực tiễn hơn so với một thí nghiệm chỉ trong notebook, vì mô hình đã huấn luyện có thể được dùng như một dịch vụ sàng lọc nhẹ cho việc đánh giá và xem xét ví.',
    ],
    deploymentParagraphs: [
      'Dự án cũng có một luồng demo đã được triển khai cho việc dự đoán ví, giúp cho thấy mô hình có thể được sử dụng ngoài môi trường thử nghiệm offline. Điều này khiến hệ thống thực tiễn hơn bằng cách kết nối đầu vào ví, suy luận mô hình và đầu ra dự đoán trong một luồng sử dụng được.',
      'Ở giai đoạn hiện tại, phiên bản triển khai này vẫn nên được xem là một prototype hoặc demo hơn là một nền tảng production hoàn chỉnh, nhưng nó cho thấy rõ cách quy trình machine learning có thể trở thành một dịch vụ sàng lọc có thể sử dụng được.',
    ],
    deploymentLinks: [
      { label: 'Demo dự án chính', href: 'DAN_LINK_APTOS_DEMO_O_DAY' },
      { label: 'Tài liệu API mô hình', href: 'DAN_LINK_APTOS_API_DOCS_O_DAY' },
    ],
    limitationParagraphs: [
      'Một hạn chế quan trọng là kết quả test độc lập được báo cáo đến từ một tập test nhỏ chỉ gồm 16 mẫu, trong đó chỉ có 3 ví Sybil.',
      'Vì vậy, kết quả này nên được trình bày như một outcome prototype đầy hứa hẹn thay vì bằng chứng cuối cùng cho độ mạnh production-level.',
      'Mô hình cần được kiểm định thêm và có thể cần huấn luyện lại trên các bộ dữ liệu on-chain lớn hơn và đa dạng hơn để xác nhận khả năng khái quát hóa.',
    ],
    takeawayParagraphs: [
      'Dự án này thể hiện khả năng của mình trong việc kết hợp công việc machine learning kỹ thuật với tư duy phân tích vấn đề. Không chỉ train mô hình, mình còn tiếp cận bài toán bằng cách nghiên cứu hành vi ví đáng ngờ, xác định các mẫu rủi ro thực tế, biến chúng thành feature và label có thể sử dụng, rồi xây dựng một pipeline ML có cấu trúc cho bài toán phân loại.',
      'Điều khiến dự án này có ý nghĩa đối với mình không chỉ nằm ở hiệu năng mô hình, mà còn ở quá trình biến một bài toán thực tế còn mơ hồ thành một giải pháp AI khả thi thông qua tư duy dữ liệu, thiết kế feature, đánh giá và diễn giải mô hình.',
    ],
    figures: {
      process: {
        caption: 'Hình 1. Quy trình huấn luyện mô hình đầu-cuối cho Aptos Sybil Detector.',
        description:
          'Hình này thể hiện toàn bộ pipeline machine learning của dự án, bao gồm chuẩn bị dữ liệu, preprocessing, so sánh mô hình, đánh giá và thiết kế luồng dự đoán phục vụ triển khai.',
      },
      evaluation: {
        caption: 'Hình 2. Ma trận nhầm lẫn và báo cáo phân loại của mô hình cuối trên tập test độc lập.',
        description:
          'Kết quả này cho thấy số lượng ví được phân loại đúng và sai trên từng lớp, đặc biệt nhấn mạnh hiệu quả phát hiện Sybil cũng như sự cân bằng giữa false positive và false negative.',
      },
      threshold: {
        caption: 'Hình 3. Precision, recall và F1-score theo các ngưỡng quyết định khác nhau.',
        description:
          'Phân tích này cho thấy threshold không cần phải cố định ở mức 0.5. Trong dự án này, ngưỡng khoảng 0.59 tạo ra sự cân bằng tốt hơn giữa precision, recall và F1-score.',
      },
      explainability: {
        caption: 'Hình 4. Force plot dùng để giải thích dự đoán cho từng ví.',
        description:
          'Trực quan hóa này giải thích vì sao mô hình dự đoán một ví là Sybil hay Non-Sybil bằng cách cho thấy những đặc trưng nào đang đẩy kết quả lên hoặc kéo xuống trong từng trường hợp cụ thể.',
      },
      apiSybil: {
        caption: 'Hình 5. Demo Postman của API /predict trả về kết quả phân loại Sybil.',
        description:
          'Ví dụ này cho thấy API trả về dự đoán ở cấp độ ví cùng với các trường hỗ trợ như xác suất Sybil, phân loại nhị phân và confidence score cho một ví được dự đoán là Sybil.',
      },
      apiNormal: {
        caption: 'Hình 6. Demo Postman của API /predict trả về kết quả phân loại Normal.',
        description:
          'Ví dụ này cho thấy cùng một luồng dự đoán cũng có thể phân loại ví là Normal, trong khi vẫn giữ cấu trúc đầu ra API nhất quán cho mục đích sàng lọc thực tiễn.',
      },
    },
  },
}

function ImageLightbox({ preview, onClose, closeText }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (preview) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [preview, onClose])

  if (!preview) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-3 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-300"
        >
          {closeText}
        </button>

        <img
          src={preview.image}
          alt={preview.alt}
          className="max-h-[82vh] w-full object-contain"
        />

        <div className="border-t border-white/10 px-4 py-3">
          <p className="text-sm text-slate-300">{preview.alt}</p>
        </div>
      </div>
    </div>
  )
}

function SectionBlock({ title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
      <h2 className="mb-5 text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <div className="space-y-4 text-slate-300">{children}</div>
    </section>
  )
}

function ClickableImage({
  image,
  alt,
  onPreview,
  imageClassName = '',
  clickToEnlargeText,
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={() => onPreview({ image, alt })}
      className={`group relative block w-full text-left ${className}`}
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-3 transition duration-300 group-hover:border-sky-400/40">
        <img
          src={image}
          alt={alt}
          className={`w-full cursor-zoom-in object-contain transition duration-300 group-hover:scale-[1.01] ${imageClassName}`}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-slate-950/0 opacity-0 transition duration-300 group-hover:bg-slate-950/35 group-hover:opacity-100">
          <span className="rounded-full border border-white/15 bg-slate-950/80 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            {clickToEnlargeText}
          </span>
        </div>
      </div>
    </button>
  )
}

function FigureBlock({
  image,
  alt,
  caption,
  description,
  reverse = false,
  onPreview,
  clickToEnlargeText,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 md:p-6">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div className={reverse ? 'md:order-2' : ''}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
            {caption}
          </p>
          <p className="leading-7 text-slate-300">{description}</p>
        </div>

        <div className={reverse ? 'md:order-1' : ''}>
          <ClickableImage
            image={image}
            alt={alt}
            onPreview={onPreview}
            clickToEnlargeText={clickToEnlargeText}
            imageClassName="h-[220px] md:h-[260px]"
          />
        </div>
      </div>
    </div>
  )
}

function AptosProject() {
  const project = getProjectBySlug('aptos-sybil-detector')
  const [preview, setPreview] = useState(null)
  const [language, setLanguage] = useState(getSavedLanguage())
  const t = content[language]

  useEffect(() => {
  saveLanguage(language)
}, [language])

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">Project not found.</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ImageLightbox preview={preview} onClose={() => setPreview(null)} closeText={t.close} />

      <div className="border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-sm font-medium text-sky-400 hover:text-sky-300">
            {t.back}
          </Link>

          <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-2 text-sm font-semibold transition ${
                language === 'en'
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-300 hover:text-sky-300'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('vi')}
              className={`px-3 py-2 text-sm font-semibold transition ${
                language === 'vi'
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-300 hover:text-sky-300'
              }`}
            >
              VI
            </button>
          </div>
        </div>
      </div>

      <main className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <section className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                {t.category}
              </p>

              <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-6xl">
                {t.heroTitle}
              </h1>

              <p className="text-lg leading-8 text-slate-300">{t.heroDescription}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {t.quickFacts.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-4 text-sm font-medium text-sky-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ClickableImage
                image={project.coverImage}
                alt={project.coverAlt}
                onPreview={setPreview}
                clickToEnlargeText={t.clickToEnlarge}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-2xl shadow-sky-950/40"
                imageClassName="h-[260px] md:h-[300px]"
              />
            </div>
          </section>

          <SectionBlock title={t.sections.overview}>
            {t.overviewParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title={t.sections.problem}>
            <ul className="space-y-3">
              {t.problemPoints.map((item) => (
                <li key={item} className="leading-8">
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title={t.sections.role}>
            {t.roleParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title={t.sections.challenge}>
            {t.challengeParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title={t.sections.process}>
            <p className="leading-8">{t.figures.process.description}</p>

            <FigureBlock
              image={trainingProcessImage}
              alt="Aptos training process"
              caption={t.figures.process.caption}
              description={t.figures.process.description}
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.modeling}>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">{t.dataFeatureTitle}</h3>
                <ul className="space-y-3">
                  {t.dataAndFeaturePoints.map((item) => (
                    <li key={item} className="leading-8">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">{t.modelTrainingTitle}</h3>
                <ul className="space-y-3">
                  {t.modelingPoints.map((item) => (
                    <li key={item} className="leading-8">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionBlock>

          <SectionBlock title={t.sections.evaluation}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-slate-900 p-5"
                >
                  <p className="mb-2 text-sm uppercase tracking-[0.18em] text-sky-400">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                </div>
              ))}
            </div>

            {t.evaluationParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <FigureBlock
              image={confusionMatrixImage}
              alt="Confusion matrix and classification report"
              caption={t.figures.evaluation.caption}
              description={t.figures.evaluation.description}
              reverse
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.threshold}>
            {t.thresholdParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <FigureBlock
              image={thresholdTuningImage}
              alt="Threshold tuning"
              caption={t.figures.threshold.caption}
              description={t.figures.threshold.description}
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.explainability}>
            {t.explainabilityParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <FigureBlock
              image={forcePlotImage}
              alt="Force plot explanation"
              caption={t.figures.explainability.caption}
              description={t.figures.explainability.description}
              reverse
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.api}>
            {t.apiDemoParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <div className="space-y-6">
              <FigureBlock
                image={apiSybilImage}
                alt="Postman Sybil prediction demo"
                caption={t.figures.apiSybil.caption}
                description={t.figures.apiSybil.description}
                onPreview={setPreview}
                clickToEnlargeText={t.clickToEnlarge}
              />

              <FigureBlock
                image={apiNormalImage}
                alt="Postman Normal prediction demo"
                caption={t.figures.apiNormal.caption}
                description={t.figures.apiNormal.description}
                reverse
                onPreview={setPreview}
                clickToEnlargeText={t.clickToEnlarge}
              />
            </div>
          </SectionBlock>

          <SectionBlock title={t.sections.deployment}>
            {t.deploymentParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <div className="grid gap-4 pt-2 md:grid-cols-2">
              {t.deploymentLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-5 py-5 text-sky-200 transition hover:border-sky-400/40 hover:bg-sky-500/15"
                >
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
                    {link.label}
                  </p>
                  <p className="break-all text-sm leading-7 text-slate-300">{link.href}</p>
                </a>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title={t.sections.limitations}>
            <ul className="space-y-3">
              {t.limitationParagraphs.map((item) => (
                <li key={item} className="leading-8">
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title={t.sections.takeaway}>
            {t.takeawayParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>
        </div>
      </main>
    </div>
  )
}

export default AptosProject