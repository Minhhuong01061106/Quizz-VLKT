// Dữ liệu câu hỏi
const quizData = [
  {
    question:
      "Có thể phát biểu như thế nào sau đây về tính chất của chuyển động thẳng đều?",
    answers: [
      "Tọa độ chất điểm là một hàm số bậc nhất theo thời gian",
      "Quãng đường đi được giảm dần theo thời gian",
      "Vận tốc tăng dần theo thời gian",
      "Gia tốc luôn dương",
    ],
    correctAnswer: 0, // A
  },
  {
    question:
      "Một vật đang chuyển động thẳng nhanh dần đều và có gia tốc a > 0. Đổi chiều (+) trên quỹ đạo, gia tốc trở thành a < 0. Chuyển động của vật thay đổi ra sao?",
    answers: [
      "Trở thành chuyển động chậm dần",
      "Trở thành chuyển động đều",
      "Vẫn nhanh dần đều nhưng vận tốc tăng chậm hơn trước",
      "Không thay đổi",
    ],
    correctAnswer: 3, // D (ADCACAABC... - Câu 2: D)
  },
  {
    question:
      "Một vật chuyển động thẳng nhanh dần đều và có gia tốc a > 0. Đổi chiều vector gia tốc để có a⃗′ = -a⃗ và cũng đổi chiều (+) trên quỹ đạo. Gia tốc mới có giá trị đại số a′ > 0. Chuyển động của vật thay đổi ra sao?",
    answers: [
      "Ngừng lại (vật dừng lại)",
      "Chuyển động đều",
      "Chuyển động chậm dần",
      "Chuyển động nhanh dần",
    ],
    correctAnswer: 2, // C (ADCACAABC... - Câu 3: C)
  },
  {
    question:
      "Thả rơi tự do hai vật có khối lượng khác nhau từ một độ cao xuống đất trong môi trường chân không. Kết luận nào sau đây là đúng?",
    answers: [
      "Hai vật chạm đất cùng lúc",
      "Vật có khối lượng lớn hơn chạm đất trước vật có khối lượng bé hơn",
      "Vật có khối lượng lớn hơn chạm đất sau vật có khối lượng bé hơn",
      "Không xác định vật nào rơi chạm đất trước",
    ],
    correctAnswer: 0, // A (ADCACAABC... - Câu 4: A)
  },
  {
    question:
      "Bánh xe bán kính R lăn đều không trượt trên đường thẳng n vòng mỗi giây. Tốc độ của bánh xe có biểu thức nào?",
    answers: ["nR", "πnR", "2πnR", "4πnR"],
    correctAnswer: 2, // C (ADCACAABC... - Câu 5: C)
  },
  {
    question: "Động lượng của vật chuyển động thẳng đều có tính chất nào?",
    answers: [
      "Không đổi",
      "Biến đổi phương, độ lớn không đổi",
      "Không biến đổi phương, độ lớn biến đổi",
      "Biến đổi phương và độ lớn",
    ],
    correctAnswer: 0, // A (ADCACAABC... - Câu 6: A)
  },
  {
    question:
      "Xét các chuyển động sau đây, ở trường hợp nào, vật chuyển động không chịu tác dụng của một hợp lực (hoặc một lực)?",
    answers: [
      "Thẳng đều",
      "Tròn đều",
      "Thẳng nhanh dần đều",
      "Thẳng chậm dần đều",
    ],
    correctAnswer: 0, // A (ADCACAABC... - Câu 7: A)
  },
  {
    question:
      "Một vật có khối lượng m treo trong thang máy bằng một dây nhẹ không dãn vào trần thang máy. Trong điều kiện đó vật chịu tác dụng của: Lực căng dây T⃗, Trọng lực P⃗ = m g⃗. Xét các quan hệ sau giữa độ lớn các lực. Khi thang máy đi lên nhanh dần đều ta có kết luận nào?",
    answers: ["T = mg", "T > mg", "T < mg", "T = 0"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 8: B)
  },
  {
    question:
      "Một vật có khối lượng m treo trong thang máy bằng một dây nhẹ không dãn vào trần thang máy. Trong điều kiện đó vật chịu tác dụng của: Lực căng dây T⃗, Trọng lực P⃗ = m g⃗. Xét các quan hệ sau giữa độ lớn các lực. Khi thang máy đi xuống chậm dần đều ta có kết luận nào?",
    answers: ["T = mg", "T > mg", "T < mg", "T = 0"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 9: B)
  },
  {
    question:
      "Vật trượt không vận tốc đầu xuống mặt phẳng nghiêng góc α, tiếp giáp với mặt phẳng ngang. Giả sử chỗ tiếp giáp của hai mặt phẳng, vận tốc chỉ đổi phương mà không ảnh hưởng về độ lớn. Xét các trạng thái chuyển động sau. Nếu mặt nghiêng có ma sát; mặt phẳng ngang trơn nhẵn thì chuyển động của vật có trạng thái nào?",
    answers: [
      "Đều trên mặt phẳng nghiêng; chậm dần trên mặt phẳng ngang",
      "Nhanh dần đều trên mặt phẳng nghiêng; đều trên mặt phẳng ngang",
      "Nhanh dần đều trên mặt phẳng nghiêng; chậm dần đều trên mặt phẳng ngang",
      "Đều trên mặt phẳng nghiêng; nhanh dần đều trên mặt phẳng ngang",
    ],
    correctAnswer: 2, // C (ADCACAABC... - Câu 10: C)
  },
  {
    question:
      "Một quả cầu được treo vào một sợi dây. Sợi dây gắn vào đầu cuối của một lò xo đầu kia móc vào trần nhà. Vật nào sau đây không tương tác với quả cầu?",
    answers: [
      "Trái đất",
      "Lò xo",
      "Sợi dây",
      "Không có vật nào tương tác với quả cầu",
    ],
    correctAnswer: 1, // D (ADCACAABC... - Câu 11: D)
  },
  {
    question:
      "Một vật đang chuyển động thẳng đều với vận tốc v⃗0 thì chịu tác dụng của một lực F⃗ không đổi. Vật sẽ chuyển động ra sao khi chịu lực tác dụng?",
    answers: [
      "Thẳng nhanh dần đều",
      "Thẳng chậm dần đều",
      "Tròn đều",
      "Không xác định được vì chưa đủ thông tin",
    ],
    correctAnswer: 3, // B (ADCACAABC... - Câu 12: B)
  },
  {
    question: "Động lượng của vật chuyển động tròn đều có tính chất nào?",
    answers: [
      "Không đổi",
      "Biến đổi phương, độ lớn không đổi",
      "Không biến đổi phương, độ lớn biến đổi",
      "Biến đổi phương và độ lớn",
    ],
    correctAnswer: 1, // B (ADCACAABC... - Câu 13: B)
  },
  {
    question: "Trong các trường hợp sau, vật chuyển động không có gia tốc?",
    answers: [
      "Chuyển động nhanh thêm",
      "Chuyển động chậm bớt",
      "Chuyển động đổi hướng",
      "Chuyển động có vận tốc và hướng không thay đổi",
    ],
    correctAnswer: 3, // D (ADCACAABC... - Câu 14: D)
  },
  {
    question:
      "Vật đang chuyển động thẳng nhanh dần đều và có gia tốc a > 0. Làm triệt tiêu gia tốc a = 0. Chuyển động của vật thay đổi như thế nào?",
    answers: [
      "Ngừng lại",
      "Trở thành đều",
      "Trở thành chậm dần",
      "Chưa biết vì không đủ thông tin",
    ],
    correctAnswer: 1, // B (ADCACAABC... - Câu 15: B)
  },
  {
    question:
      "Xe chuyển động thẳng đều trên đệm không khí trơn nhẵn. Có các lực cân bằng nào tác dụng lên xe?",
    answers: [
      "Trọng lực",
      "Phản lực của đệm không khí",
      "Trọng lực và lực ma sát",
      "Trọng lực và phản lực của đệm không khí",
    ],
    correctAnswer: 3, // D (ADCACAABC... - Câu 16: D)
  },
  {
    question:
      "Một chất điểm chuyển động tròn đều trên đường tròn bán kính R. Đặt ω là tốc độ góc, v là vận tốc dài, n là số vòng quay/giây. Độ lớn của gia tốc hướng tâm có biểu thức nào trong các biểu thức cho sau đây?",
    answers: ["Rω²", "v²/R", "4π²n²R", "Cả 3 biểu thức A, B, C"],
    correctAnswer: 1, // D (ADCACAABC... - Câu 17: D)
  },
  {
    question:
      "Trong 2 giây cuối vật rơi tự do được quãng đường 40 m. Vật được buông rơi từ độ cao nào? Lấy g = 10 m/s²",
    answers: ["22,5 m", "45 m", "90 m", "180 m"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 18: B)
  },
  {
    question:
      "Trong 2 giây cuối vật rơi tự do được quãng đường 40 m. Thời gian rơi của vật từ lúc bắt đầu rơi đến lúc chạm đất là bao nhiêu? Lấy g = 10 m/s².",
    answers: ["1 s", "2 s", "3 s", "4 s"],
    correctAnswer: 2, // C (ADCACAABC... - Câu 19: C)
  },
  {
    question:
      "Hòn đá ném thẳng đứng xuống dưới từ độ cao 75 m so với mặt đất với vận tốc ban đầu v0 = 10 m/s. Lấy g = 10 m/s², bỏ qua sức cản không khí. Thời gian rơi của hòn đá từ lúc bắt đầu ném đến lúc chạm đất là bao nhiêu?",
    answers: ["1 s", "3 s", "5 s", "7 s"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 20: B)
  },
  {
    question:
      "Từ độ cao 7,5 m một quả cầu được ném lên xiên góc α = 45° so với phương ngang với vận tốc ban đầu v0 = 10 m/s. Vị trí chạm đất của quả cầu là:",
    answers: ["5 m", "10 m", "15 m", "20 m"],
    correctAnswer: 2, // C (ADCACAABC... - Câu 21: C)
  },
  {
    question:
      "Từ một đỉnh tháp cao H = 25 m người ta ném một hòn đá lên phía trên với vận tốc v0 = 15 m/s theo phương hợp với phương nằm ngang một góc α = 30°. Thời gian chuyển động của hòn đá là bao nhiêu?",
    answers: ["1,1 s", "2,1 s", "3,1 s", "4,1 s"],
    correctAnswer: 2, // B (ADCACAABC... - Câu 22: B)
  },
  {
    question:
      "Từ một đỉnh tháp cao H = 25 m người ta ném một hòn đá lên phía trên với vận tốc v0 = 15 m/s theo phương hợp với phương nằm ngang một góc α = 30°. Khoảng cách từ chân tháp đến chỗ rơi của hòn đá?",
    answers: ["30,3 m", "40,3 m", "50,3 m", "60,3 m"],
    correctAnswer: 1, // A (ADCACAABC... - Câu 23: A)
  },
  {
    question:
      "Cho hệ như hình vẽ: mA = 5 kg; mB = 2 kg; α = 30°; k = 0,1. Gia tốc của chuyển động có giá trị bằng bao nhiêu?",
    answers: ["0,1 m/s²", "0,2 m/s²", "0,3 m/s²", "0,4 m/s²"],
    correctAnswer: 0, // A (ADCACAABC... - Câu 24: A)
  },
  {
    question:
      "Một vật có khối lượng m = 20 kg được kéo trượt trên một mặt sàn nằm ngang bởi một lực F hợp với phương ngang một góc α = 60° hướng lên. Cho biết hệ số ma sát trượt giữa vật và mặt sàn là k = 0,1. Cho g = 10 m/s², độ lớn lực F = 40 N. Độ lớn gia tốc của vật là bao nhiêu?",
    answers: ["0,17 m/s²", "0,27 m/s²", "0,37 m/s²", "0,47 m/s²"],
    correctAnswer: 0, // A (ADCACAABC... - Câu 25: A)
  },
  {
    question:
      "Một vật có khối lượng m = 20 kg được kéo trượt trên một mặt sàn nằm ngang bởi một lực F hợp với phương ngang một góc α = 60° hướng lên. Cho biết hệ số ma sát trượt giữa vật và mặt sàn là k = 0,1. Cho g = 10 m/s², độ lớn lực F = 40 N. Độ lớn của phản lực của mặt sàn lên vật là bao nhiêu?",
    answers: ["165,36 N", "170,36 N", "175,36 N", "180,36 N"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 26: B)
  },
  {
    question:
      "Từ một sân thượng cao 20 m của một tòa nhà người ta ném một hòn sỏi theo phương ngang với vận tốc ban đầu là 4 m/s. Cho g = 10 m/s², chọn gốc tọa độ tại nơi ném hòn sỏi. Tầm xa cực đại mà hòn sỏi đạt được là:",
    answers: ["5 m", "6 m", "7 m", "8 m"],
    correctAnswer: 3, // A (ADCACAABC... - Câu 27: A)
  },
  {
    question:
      "Từ một sân thượng cao 20 m của một tòa nhà người ta ném một hòn sỏi theo phương ngang với vận tốc ban đầu là 4 m/s. Cho g = 10 m/s², chọn gốc tọa độ tại nơi ném hòn sỏi. Thời gian hòn sỏi chuyển động từ lúc bắt đầu ném cho đến khi chạm đất là:",
    answers: ["2 s", "3 s", "4 s", "5 s"],
    correctAnswer: 0, // A (ADCACAABC... - Câu 28: A)
  },
  {
    question:
      "Quả bóng có khối lượng m = 200 g đang bay ngang với vận tốc v1 = 6 m/s thì đập vuông góc vào một bức tường thẳng đứng bay ngược trở lại theo phương vuông góc với tường với vận tốc v2 = 4 m/s. Độ biến thiên động lượng của quả bóng là bao nhiêu?",
    answers: ["1 kg.m/s", "2 kg.m/s", "3 kg.m/s", "4 kg.m/s"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 29: B)
  },
  {
    question:
      "Một đĩa quay đều quanh trục qua tâm O, với vận tốc quay 300 vòng trong một phút. Vận tốc góc của chuyển động là bao nhiêu?",
    answers: ["11,4 rad/s", "21,4 rad/s", "31,4 rad/s", "41,4 rad/s"],
    correctAnswer: 2, // C (ADCACAABC... - Câu 30: C)
  },
  {
    question:
      "Một đĩa quay đều quanh trục qua tâm O, với vận tốc quay 300 vòng trong một phút. Cho g = 10 m/s². Vận tốc dài của một điểm trên đĩa cách tâm 10 cm là:",
    answers: ["3,14 m/s", "4,14 m/s", "5,14 m/s", "6,14 m/s"],
    correctAnswer: 0, // A (ADCACAABC... - Câu 31: A)
  },
  {
    question:
      "Vật có khối lượng m = 24 kg được giữ yên trên mặt phẳng nghiêng bởi một sợi dây song song với mặt phẳng nghiêng. Biết góc nghiêng α = 45°; g = 10 m/s², ma sát là không đáng kể. Lực căng dây có giá trị bằng bao nhiêu?",
    answers: ["100√2 N", "110√2 N", "120√2 N", "130√2 N"],
    correctAnswer: 2, // C (ADCACAABC... - Câu 32: C)
  },
  {
    question:
      "Một vật được ném xiên góc từ mặt đất lên trên với vận tốc đầu v0 = 30 m/s, góc ném nghiêng α = 45°. Cho g = 10 m/s². Độ cao cực đại vật đạt được là:",
    answers: ["12,5 m", "22,5 m", "32,5 m", "42,5 m"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 33: B)
  },
  {
    question:
      "Từ một đỉnh một tòa nhà người ta thả rơi một vật. Một giây sau ở tầng thấp hơn 10 m người ta thả rơi vật thứ hai. Cho g = 10 m/s². Hai vật sẽ gặp nhau sau khi vật thứ nhất được thả rơi bao lâu?",
    answers: ["1 s", "1,5 s", "2 s", "2,5 s"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 34: B)
  },
  {
    question:
      "Tại cùng một thời điểm một vật được thả rơi tự do và một vật khác được ném ngang với vận tốc v⃗0 tại một độ cao h. Bỏ qua lực cản không khí. Khoảng cách của hai vật khi chạm đất được cho bởi biểu thức nào?",
    answers: ["v₀√(2h/g)", "√(1 + v₀²/(2gh))", "v₀/√(2gh)", "√(v₀² + 2gh)/g"],
    correctAnswer: 0, // A (ADCACAABC... - Câu 35: A)
  },
  {
    question:
      "Từ một đỉnh tháp cao H = 25 m người ta ném một hòn đá lên phía trên với vận tốc v0 = 15 m/s theo phương hợp với phương nằm ngang một góc α = 30°. Vận tốc của hòn đá lúc chạm đất là bao nhiêu?",
    answers: ["23,4 m/s", "24,5 m/s", "25,6 m/s", "26,9 m/s"],
    correctAnswer: 3, // D (ADCACAABC... - Câu 36: D)
  },
  {
    question:
      "Hai vật có khối lượng m1 = 2 kg; m2 = 3 kg được nối với nhau bằng một sợi dây và được đặt trên mặt bàn nằm ngang. Dùng một sợi dây khác vắt qua một ròng rọc, một đầu dây buộc vào m2 và đầu kia buộc vào một vật thứ ba có khối lượng m3. Hệ vật chuyển động với gia tốc a = 2 m/s². Coi ma sát không đáng kể, bỏ qua khối lượng của dây và ròng rọc, lấy g = 10 m/s². Vật m3 có khối lượng bằng bao nhiêu?",
    answers: ["0,25 kg", "1,25 kg", "2,25 kg", "3,25 kg"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 37: B)
  },
  {
    question:
      "Xe chở đầy cát có khối lượng M = 20 kg chuyển động không ma sát với vận tốc v1 = 3,3 m/s trên mặt đường nằm ngang. Một quả cầu có khối lượng m = 2 kg bay theo chiều ngược lại với vận tốc nằm ngang v2 = 11 m/s. Sau khi gặp xe quả cầu ngập vào trong cát. Hỏi vận tốc sau của xe bằng bao nhiêu?",
    answers: ["1 m/s", "2 m/s", "3 m/s", "4 m/s"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 38: B)
  },
  {
    question:
      "Thanh kim loại đồng chất khối lượng m = 2,4 kg quay quanh trục đi qua trung điểm của thanh, chiều dài thanh là 2 m. Moment quán tính của thanh là bao nhiêu?",
    answers: ["0,2 kg.m²", "0,4 kg.m²", "0,6 kg.m²", "0,8 kg.m²"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 39: B)
  },
  {
    question:
      "Đĩa tròn đồng chất có khối lượng m = 4 kg bán kính R = 50 cm quay xung quanh trục đi qua tâm của đĩa. Moment quán tính của đĩa là bao nhiêu ?",
    answers: ["0,3 kg.m²", "0,5 kg.m²", "0,7 kg.m²", "0,9 kg.m²"],
    correctAnswer: 1, // B (ADCACAABC... - Câu 40: B)
  },
  {
    question:
      "Xem trái đất là quả cầu đặc có bán kính R = 6400 km, có khối lượng riêng trung bình ρ = 5,5.10³ kg/m³. Moment quán tính của Trái đất là bao nhiêu",
    answers: [
      "7,89.10³⁷ kg.m²",
      "8,89.10³⁷ kg.m²",
      "9,89.10³⁷ kg.m²",
      "10,89.10³⁷ kg.m²",
    ],
    correctAnswer: 2, // C (ADCACAABC... - Câu 41: C)
  },
  {
    question:
      "Một vật được ném lên thẳng đứng từ vị trí cách mặt đất 30 m. Với vận tốc đầu v0 = 5 m/s. Lấy g = 10 m/s². Bỏ qua sức cản không khí. Vận tốc của vật lúc chạm đất là bao nhiêu?",
    answers: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
    correctAnswer: 3, // D (ADCACAABC... - Câu 42: D)
  },
  {
    question:
      "Tính chất nào sau đây không phải là chuyển động của phân tử vật chất ở thể khí?",
    answers: [
      "Chuyển động hỗn loạn",
      "Chuyển động hỗn loạn và không ngừng",
      "Chuyển động không ngừng",
      "Chuyển động hỗn loạn xung quanh các vị trí cân bằng cố định",
    ],
    correctAnswer: 3, // D (DDABBDC... - Câu 1: D)
  },
  {
    question: "Nhận xét nào sau đây không phù hợp với khí lí tưởng?",
    answers: [
      "Thể tích các phân tử có thể bỏ qua",
      "Các phân tử chỉ tương tác với nhau khi va chạm",
      "Các phân tử chuyển động càng nhanh khi nhiệt độ càng cao",
      "Khối lượng các phân tử có thể bỏ qua",
    ],
    correctAnswer: 3, // D (DDABBDC... - Câu 2: D)
  },
  {
    question:
      "Quá trình biến đổi trạng thái trong đó nhiệt độ được giữ không đổi gọi là quá trình",
    answers: ["đẳng nhiệt", "đẳng tích", "đẳng áp", "đoạn nhiệt"],
    correctAnswer: 0, // A (DDABBDC... - Câu 3: A)
  },
  {
    question: "Một lượng khí xác định, được xác định bởi bộ ba thông số gồm",
    answers: [
      "áp suất, thể tích, khối lượng",
      "áp suất, nhiệt độ, thể tích",
      "thể tích, khối lượng, nhiệt độ",
      "áp suất, nhiệt độ, khối lượng",
    ],
    correctAnswer: 1, // B (DDABBDC... - Câu 4: B)
  },
  {
    question:
      "Độ biến thiên nội năng của n mol khí lí tưởng đơn nguyên tử từ trạng thái (1) sang trạng thái (2) được tính bởi công thức nào sau đây?",
    answers: [
      "ΔU = n.R.ΔT/2",
      "ΔU = 3.n.R.ΔT/2",
      "ΔU = 5.n.R.ΔT/2",
      "ΔU = n.R.ΔT.i/2",
    ],
    correctAnswer: 1, // B (DDABBDC... - Câu 5: B)
  },
  {
    question:
      "Trong quá trình biến đổi đoạn nhiệt với γ là hệ số Poisson, công thức nào sau đây là sai?",
    answers: [
      "P.Vγ = const",
      "T.Vγ-1 = const",
      "Tγ.pγ-1 = const",
      "T.Vγ = const",
    ],
    correctAnswer: 3, // D (DDABBDC... - Câu 6: D)
  },
  {
    question: "Khi làm nóng một lượng khí có thể tích không đổi thì",
    answers: [
      "áp suất khí không đổi",
      "số phân tử trong đơn vị thể tích tăng tỉ lệ với nhiệt độ",
      "số phân tử trong đơn vị thể tích không đổi",
      "số phân tử trong đơn vị thể tích giảm tỉ lệ nghịch với nhiệt độ",
    ],
    correctAnswer: 2, // C (DDABBDC... - Câu 7: C)
  },
  {
    question: "Hệ thức nào sau đây phù hợp với định luật Bôilơ - Mariốt?",
    answers: ["p1V1 = p2V2", "p1/V1 = p2/V2", "p1/p2 = V1/V2", "p ~ V"],
    correctAnswer: 0, // A (DDABBDC... - Câu 8: A)
  },
  {
    question:
      "Trong hệ toạ độ (p,T) đường biểu diễn nào sau đây là đường đẳng tích?",
    answers: [
      "Đường hypebol",
      "Đường thẳng kéo dài thì đi qua gốc toạ độ",
      "Đường thẳng kéo dài thì không đi qua gốc toạ độ",
      "Đường thẳng cắt trục p tại điểm p = p0",
    ],
    correctAnswer: 1, // B (DDABBDC... - Câu 9: B)
  },
  {
    question:
      "Có 6,5g hyđrô ở nhiệt độ 27°C, nhận nhiệt lượng giãn nở gấp đôi, trong điều kiện áp suất không đổi. Tính công mà khí sinh ra.",
    answers: ["6.4.10³ J", "8,1.10³ J", "7,8.10³ J", "8,6.10³ J"],
    correctAnswer: 1, // B (DDABBDC... - Câu 10: B)
  },
  {
    question:
      "Khối khí được chứa trong bình có dung tích 5 lít chứa 0,5 mol khí ở nhiệt độ 0°C có áp suất là bao nhiêu:",
    answers: ["1,12 atm", "2,04 atm", "2,24 atm", "2,56 atm"],
    correctAnswer: 2, // C (DDABBDC... - Câu 11: C)
  },
  {
    question: "Hệ thức nào sau đây không phù hợp với quá trình đẳng áp?",
    answers: ["V/T = const", "V ∼ 1/T", "V ∼ T", "V1/T1 = V2/T2"],
    correctAnswer: 1, // B (DDABBDC... - Câu 12: B)
  },
  {
    question:
      "Một khối khí ban đầu có V1 = 2,4 m³, p1 = 1 kN/m² biến đổi đẳng nhiệt đến áp suất 0,5 kN/m² thì thể tích của khối khí bằng:",
    answers: ["3,6 m³", "4,8 m³", "3,6 cm³", "4,8 cm³"],
    correctAnswer: 1, // B (DDABBDC... - Câu 13: B)
  },
  {
    question:
      "Nén một khối khí theo quá trình đẳng nhiệt từ thể tích 10 lít đến thể tích 4 lít thì áp suất của khí tăng lên bao nhiêu lần?",
    answers: ["2,5 lần", "2 lần", "1,5 lần", "4 lần"],
    correctAnswer: 0, // A (DDABBDC... - Câu 14: A)
  },
  {
    question:
      "Nén một khối khí theo quá trình đẳng nhiệt từ thể tích 9 lít đến thể tích 6 lít thì áp suất tăng một lượng Δp = 50 kPa. Áp suất ban đầu của khí đó là:",
    answers: ["40 kPa", "60 kPa", "80 kPa", "100 kPa"],
    correctAnswer: 3, // D (DDABBDC... - Câu 15: D)
  },
  {
    question:
      "Có 10 g khí oxy ở 10°C, áp suất 3.10⁵ Pa. Sau khi hơ nóng đẳng áp, thể tích khí tăng đến 10 l. Nhiệt lượng mà khối khí nhận được là:",
    answers: ["7,9.10³ J", "8,8.10³ J", "6,9.10³ J", "7,5.10³ J"],
    correctAnswer: 0, // A (DDABBDC... - Câu 16: A)
  },
  {
    question:
      "Nén 10g khí oxy từ điều kiện tiêu chuẩn tới thể tích 4l. Tìm áp suất và nhiệt lượng của khối khí trong quá trình nén đẳng nhiệt ?",
    answers: [
      "1,7.10⁵ Pa và 397 J",
      "1,8.10⁵ Pa và 397 J",
      "1,8.10⁵ Pa và 420 J",
      "1,7.10⁵ Pa và 380 J",
    ],
    correctAnswer: 0, // A (DDABBDC... - Câu 17: A)
  },
  {
    question:
      "Dưới áp suất p1 = 10⁵ Pa một lượng khí có thể tích là V1 = 10 lít. Nếu nhiệt độ được giữ không đổi và áp suất tăng lên p2 = 1,25.10⁵ Pa thì thể tích của lượng khí này là:",
    answers: ["V2 = 7 lít", "V2 = 8 lít", "V2 = 9 lít", "V2 = 10 lít"],
    correctAnswer: 1, // B (DDABBDC... - Câu 18: B)
  },
  {
    question:
      "Một xilanh chứa 100 cm³ khí ở áp suất 2.10⁵ Pa. Pit tông nén đẳng nhiệt khí trong xilanh xuống còn 50 cm³. Áp suất của khí trong xilanh lúc này là",
    answers: ["2.10⁵ Pa", "3.10⁵ Pa", "4.10⁵ Pa", "5.10⁵ Pa"],
    correctAnswer: 2, // C (DDABBDC... - Câu 19: C)
  },
  {
    question:
      "Một lượng khí ở 0°C có áp suất là 1,50.10⁵ Pa nếu thể tích khí không đổi thì áp suất ở 273°C là",
    answers: ["10⁵ Pa", "2.10⁵ Pa", "3.10⁵ Pa", "4.10⁵ Pa"],
    correctAnswer: 2, // C (DDABBDC... - Câu 20: C)
  },
  {
    question:
      "Một bình chứa một lượng khí ở nhiệt độ 27°C và ở áp suất 2.10⁵ Pa. Nếu áp suất tăng gấp đôi thì nhiệt độ của khối khí là",
    answers: ["T = 300 K", "T = 54 K", "T = 13,5 K", "T = 600 K"],
    correctAnswer: 3, // D (DDABBDC... - Câu 21: D)
  },
  {
    question:
      "Một cái bơm chứa 100 cm³ không khí ở nhiệt độ 27°C và áp suất 10⁵ Pa. Khi không khí bị nén xuống còn 20 cm³ và nhiệt độ tăng lên tới 327°C thì áp suất của không khí trong bơm là",
    answers: ["7.10⁵ Pa", "8.10⁵ Pa", "9.10⁵ Pa", "10.10⁵ Pa"],
    correctAnswer: 3, // D (DDABBDC... - Câu 22: D)
  },
  {
    question:
      "Một lượng khí đựng trong một xilanh có pittông chuyển động được. Các thông số trạng thái của lượng khí này là: 2 at, 15 lít, 300 K. Khi pittông nén khí, áp suất của khí tăng lên tới 3,5 at, thể tích giảm còn 12 lít. Nhiệt độ của khí nén là",
    answers: ["400 K", "420 K", "600 K", "150 K"],
    correctAnswer: 1, // B (DDABBDC... - Câu 23: B)
  },
  {
    question:
      "Khi thở ra dung tích của phổi là 2,4 lít và áp suất của không khí trong phổi là 101,7.10³Pa. Khi hít vào áp suất của phổi là 101,01.10³ Pa. Coi nhiệt độ của phổi là không đổi, dung tích của phổi khi hít vào bằng",
    answers: ["2,416 lít", "2,384 lít", "2,4 lít", "1,327 lít"],
    correctAnswer: 0, // A (DDABBDC... - Câu 24: A)
  },
  {
    question:
      "Để bơm đầy một khí cầu đến thể tích 100 m³ có áp suất 0,1 at ở nhiệt độ không đổi người ta dùng các ống khí Hêli có thể tích 50 lít ở áp suất 100 at. Số ống khí Hêli cần để bơm khí cầu bằng:",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 1, // B (DDABBDC... - Câu 25: B)
  },
  {
    question:
      "Một bọt khí có thể tích 1,5 cm³ được tạo ra từ khoang tàu ngầm đang lặn ở độ sâu 100 m dưới mực nước biển. Hỏi khi bọt khí này nổi lên mặt nước thì sẽ có thể tích bao nhiêu? Giả sử nhiệt độ của bọt khí là không đổi, biết khối lượng riêng của nước biển là 10³ kg/m³, áp suất khí quyển là p0 = 10⁵ Pa và g = 10 m/s².",
    answers: ["15 cm³", "15,5 cm³", "16 cm³", "16,5 cm³"],
    correctAnswer: 3, // D (DDABBDC... - Câu 26: D)
  },
  {
    question:
      "Một ống thủy tinh tiết diện đều S, một đầu kín một đầu hở, chứa một cột thủy ngân dài h = 16 cm. Khi đặt ống thẳng đứng, đầu hở ở trên thì chiều dài của cột không khí là l1 = 15 cm, áp suất khí quyển bằng p0 = 76 cmHg. Khi đặt ống thủy tinh nghiêng một góc α = 30° đối với phương thẳng đứng, đầu hở ở trên thì chiều cao của cột không khí trong ống bằng",
    answers: ["14,5 cm", "15,4 cm", "16,0 cm", "22,7 cm"],
    correctAnswer: 1, // B (DDABBDC... - Câu 27: B)
  },
  {
    question:
      "Một chiếc lốp ô tô chứa không khí có áp suất 5 at và ở nhiệt độ 25°C. Khi xe chạy nhanh nhiệt độ lốp xe tăng lên đến giá trị 50°C. Tính áp suất không khí trong lốp xe lúc này.",
    answers: ["5,42 at", "2,68 at", "4,26 at", "6,54 at"],
    correctAnswer: 0, // A (DDABBDC... - Câu 28: A)
  },
  {
    question:
      "Một bình chứa một lượng khí ở nhiệt độ 27°C và ở áp suất 2.10⁵ Pa. Nếu áp suất tăng gấp đôi thì nhiệt độ của khối khí là :",
    answers: ["300 K", "54 K", "13,5 K", "600 K"],
    correctAnswer: 3, // D (DDABBDC... - Câu 29: D)
  },
  {
    question:
      "Một bình kín chứa khí Ôxi ở nhiệt độ 27°C và áp suất 10⁵ Pa. Nếu đem bình phơi nắng ở nhiệt độ 177°C thì áp suất trong bình sẽ là :",
    answers: ["1,5.10⁵ Pa", "2.10⁵ Pa", "2,5.10⁵ Pa", "3.10⁵ Pa"],
    correctAnswer: 0, // A (DDABBDC... - Câu 30: A)
  },
  {
    question:
      "Có 5 mol khí ôxi được nung nóng để nhiệt độ tăng thêm 10°C. Nếu quá trình biến đổi là đẳng áp thì nhiệt lượng mà khí nhận được là giá trị nào sau đây:",
    answers: ["145425 kJ", "145,200 J", "1454,25 J", "155,452 J"],
    correctAnswer: 2, // C (DDABBDC... - Câu 31: C)
  },
  {
    question:
      "Một khối khí lí tưởng xác định có áp suất 1 at được làm tăng áp suất đến 4 at ở nhiệt độ không đổi thì thể tích biến đổi một lượng 3 lít. Thể tích ban đầu của khối khí đó là",
    answers: ["4 lít", "8 lít", "12 lít", "16 lít"],
    correctAnswer: 0, // A (DDABBDC... - Câu 32: A)
  },
  {
    question:
      "Một bình kín đựng khí Heli chứa N = 1,505.10²³ nguyên tử khí Heli ở 0°C và có áp suất trong bình là 1 atm. Thể tích của bình đựng khí là:",
    answers: ["5,6 lít", "11,2 lít", "22,4 lít", "28 lít"],
    correctAnswer: 0, // A (DDABBDC... - Câu 33: A)
  },
  {
    question:
      "Một bình nạp khí ở nhiệt độ 33°C dưới áp suất 300 kPa. Tăng nhiệt độ cho bình đến nhiệt độ 37°C đẳng tích thì độ tăng áp suất của khí trong bình là :",
    answers: ["3,92 kPa", "3,24 kPa", "5,64 kPa", "4,32 kPa"],
    correctAnswer: 0, // A (DDABBDC... - Câu 34: A)
  },
  {
    question:
      "Ở điều kiện tiêu chuẩn: 1 mol khí ở 0°C có áp suất 1 at và thể tích là 22,4 lít. Hỏi một bình có dung tích 5 lít chứa 0,5 mol khí ở nhiệt độ 0°C có áp suất là bao nhiêu?",
    answers: ["1,12 atm", "2,04 atm", "2,24 atm", "2,56 atm"],
    correctAnswer: 2, // C (DDABBDC... - Câu 35: C)
  },
  {
    question:
      "Một bình chứa có dung tích 20 lít chứa khí Ôxi ở nhiệt độ 17°C và áp suất 1,03.10⁷ Pa. Khối lượng khí Ôxi trong bình là",
    answers: ["2,735 g", "27,35 g", "273,5 g", "2,735 kg"],
    correctAnswer: 3, // D (DDABBDC... - Câu 36: D)
  },
  {
    question:
      "Một khí lí tưởng có thể tích 10 lít ở 27°C áp suất 1 atm, biến đổi qua hai quá trình: quá trình đẳng tích áp suất tăng gấp 2 lần; rồi quá trình đẳng áp, thể tích sau cùng là 15 lít. Nhiệt độ sau cùng của khối khí là:",
    answers: ["900°C", "81°C", "627°C", "427°C"],
    correctAnswer: 2, // C (DDABBDC... - Câu 37: C)
  },
  {
    question:
      "Nung nóng 160g khí oxy từ nhiệt độ 50°C đến 60°C. Nhiệt lượng mà khí nhận được trong quá trình đẳng tích là:",
    answers: ["1038 J", "1025 J", "1050 J", "1150 J"],
    correctAnswer: 0, // A (DDABBDC... - Câu 38: A)
  },
  {
    question:
      "Có 6,5g hyđrô ở nhiệt độ 27°C, nhận nhiệt lượng giãn nở gấp đôi, trong điều kiện áp suất không đổi. Tính độ biến thiên nội năng của khối khí ?",
    answers: ["19.4.10³ J", "18,8.10³ J", "20,2.10³ J", "22,4.10³ J"],
    correctAnswer: 2, // C (DDABBDC... - Câu 39: C)
  },
];

// Biến toàn cục
let currentQuestionIndex = 0;
let score = 0;
let quizCompleted = false;

// Khởi tạo quiz
function initQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  // Tạo HTML cho mỗi câu hỏi
  quizData.forEach((questionData, index) => {
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.dataset.questionIndex = index;

    // Tạo HTML cho câu hỏi
    let answersHTML = "";
    questionData.answers.forEach((answer, answerIndex) => {
      answersHTML += `
                        <div class="answer" data-answer-index="${answerIndex}">
                            ${answer}
                        </div>
                    `;
    });

    questionElement.innerHTML = `
                    <div class="question-number">Câu hỏi ${index + 1}/${
      quizData.length
    }</div>
                    <div class="question-text">${questionData.question}</div>
                    <div class="answers">${answersHTML}</div>
                    <div class="result" id="result-${index}"></div>
                `;

    quizContainer.appendChild(questionElement);
  });

  // Gắn sự kiện click cho mỗi đáp án
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.addEventListener("click", handleAnswerClick);
  });

  // Reset biến
  currentQuestionIndex = 0;
  score = 0;
  quizCompleted = false;

  // Ẩn kết quả
  document.getElementById("score-container").classList.remove("show");
}

// Xử lý khi người dùng click chọn đáp án
function handleAnswerClick(event) {
  if (quizCompleted) return;

  const answerElement = event.currentTarget;
  const questionElement = answerElement.closest(".question");
  const questionIndex = parseInt(questionElement.dataset.questionIndex);
  const answerIndex = parseInt(answerElement.dataset.answerIndex);
  const questionData = quizData[questionIndex];
  const resultElement = document.getElementById(`result-${questionIndex}`);

  // Kiểm tra xem câu hỏi này đã được trả lời chưa
  if (questionElement.classList.contains("answered")) {
    return;
  }

  // Đánh dấu câu hỏi đã được trả lời
  questionElement.classList.add("answered");

  // Kiểm tra câu trả lời
  const isCorrect = answerIndex === questionData.correctAnswer;

  // Cập nhật điểm số
  if (isCorrect) {
    score++;
  }

  // Hiển thị kết quả
  if (isCorrect) {
    answerElement.classList.add("correct");
    resultElement.textContent = "Chính xác! Câu trả lời đúng.";
    resultElement.className = "result correct";
  } else {
    answerElement.classList.add("incorrect");
    resultElement.textContent = `Sai rồi! Câu trả lời đúng là: ${
      questionData.answers[questionData.correctAnswer]
    }`;
    resultElement.className = "result incorrect";

    // Đánh dấu đáp án đúng
    const correctAnswer = questionElement.querySelector(
      `.answer[data-answer-index="${questionData.correctAnswer}"]`
    );
    correctAnswer.classList.add("correct");
  }

  // Kiểm tra xem đã hoàn thành tất cả câu hỏi chưa
  const answeredQuestions =
    document.querySelectorAll(".question.answered").length;
  if (answeredQuestions === quizData.length) {
    quizCompleted = true;
    showScore();
  }
}

// Hiển thị điểm số
function showScore() {
  const scoreContainer = document.getElementById("score-container");
  const scoreValue = document.getElementById("score-value");

  scoreValue.textContent = `${score}/${quizData.length}`;
  scoreContainer.classList.add("show");
}

// Khởi tạo quiz khi trang được tải
document.addEventListener("DOMContentLoaded", initQuiz);

// Xử lý nút làm lại
document.getElementById("restart-btn").addEventListener("click", initQuiz);
