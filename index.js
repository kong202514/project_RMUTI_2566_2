let cardContainer = document.getElementById("card-container"),
    selectedCardContainer = document.getElementById("selected-card-container"),
    predictionContainer = document.getElementById("prediction-container"),
    showPredictionButton = document.getElementById("show-prediction-btn"),
    shuffleButton = document.getElementById("shuffle-btn"),
    cardLimitSelect = document.getElementById("card-limit"),
    Message_error = document.getElementById("error-message"),
    totalCards = 78,
    cardLimit = parseInt(cardLimitSelect.value),
    selectedCards = [],
    card_Predictions = [
        "การเริ่มต้นใหม่, การเสี่ยง, การเดินทาง. ",
        "ทักษะ, ความสามารถ, อำนาจ.",
        "สัญชาตญาณ, ความรู้ที่ไม่รู้ตัว, ปัญญา.",
        "การเลี้ยงดู, ความอุดมสมบูรณ์, ความเป็นมารดา.",
        "อำนาจ, โครงสร้าง, การควบคุม.",
        "ประเพณี, การแนะนำทางจิตวิญญาณ, การเชื่อฟัง.",
        "ความสัมพันธ์, การเลือก, ความรัก.",
        "พลังใจ, ความมุ่งมั่น, ชัยชนะ.",
        "ความกล้าหาญ, ความอดทน, การควบคุมตนเอง.",
        "การหาความสงบ, การสะท้อน, ปัญญา.",
        "ชะตากรรม, วัฏจักร, โชค.",
        "ความยุติธรรม, ความจริง, ผลของการกระทำ.",
        "การเสียสละ, การปล่อยวาง, การปล่อยให้เป็นไป.",
        "การเปลี่ยนแปลง, การสิ้นสุด, การเริ่มต้นใหม่.",
        "ความสมดุล, ความอดทน, การพอดี.",
        "สิ่งยั่วยวน, การเสพติด, วัตถุนิยม.",
        "การเปลี่ยนแปลงที่ฉับพลัน, ความปั่นป่วน, การเปิดเผย.",
        "ความหวัง, แรงบันดาลใจ, จิตวิญญาณ.",
        "ความลวง, สัญชาตญาณ, จิตใต้สำนึก.",
        "ความสุข, ความสำเร็จ, พลังชีวิต.",
        "การพิจารณา, การตัดสิน, การตื่นรู้.",
        "ความสมบูรณ์, การเติมเต็ม, ความเป็นหนึ่งเดียว.",
        "การเริ่มต้นใหม่ในด้านการงาน, ความคิดสร้างสรรค์.",
        "การตัดสินใจ, การวางแผน, การมองไปข้างหน้า.",
        "การขยายตัว, การประสบความสำเร็จในระยะยาว.",
        "ความสำเร็จ, ความมั่นคง, การเฉลิมฉลอง.",
        "ความขัดแย้ง, การต่อสู้, ความท้าทาย.",
        "ชัยชนะ, ความสำเร็จ, การยอมรับ.",
        "การปกป้อง, การต่อสู้เพื่อความสำเร็จ.",
        "ความรวดเร็ว, การเคลื่อนไหวอย่างรวดเร็ว.",
        "ความพยายาม, ความอดทน, การต่อสู้ที่ยาวนาน.",
        "ภาระ, ความหนักหน่วง, การรับผิดชอบมากเกินไป.",
        "การเรียนรู้, ความอยากรู้อยากเห็น, การเริ่มต้น.",
        "การเดินทาง, ความตื่นเต้น, การกระทำ.",
        "ความเชื่อมั่น, ความแข็งแกร่ง, การผู้นำ.",
        "ความสามารถในการเป็นผู้นำ, ความมั่นใจ.",
        "ความรัก, ความรู้สึกใหม่ๆ, การเปิดใจ.",
        "ความสัมพันธ์, ความเชื่อมโยง, ความสมดุล.",
        "การเฉลิมฉลอง, ความร่วมมือ, มิตรภาพ.",
        "ความเบื่อหน่าย, การมองข้าม, ความรู้สึกที่หายไป.",
        "ความเศร้า, ความผิดหวัง, การสูญเสีย.",
        "ความทรงจำ, ความสุขในอดีต, ความเรียบง่าย.",
        "ความหลากหลาย, ตัวเลือกมากมาย, ความสับสน.",
        "การเดินจากไป, การแสวงหาความหมาย, การละทิ้ง.",
        "ความพึงพอใจ, ความสมหวัง, ความสำเร็จ.",
        "ความสุขในครอบครัว, ความสมบูรณ์ในชีวิต.",
        "ความคิดสร้างสรรค์, การรับรู้, ความอ่อนไหว.",
        "ความโรแมนติก, ความหลงใหล, การแสวงหาความรัก.",
        "ความเมตตา, ความเข้าใจ, การสนับสนุน.",
        "การควบคุมอารมณ์, ความฉลาดทางอารมณ์.",
        "ความชัดเจน, ความจริง, การเริ่มต้นใหม่ในทางความคิด.",
        "การตัดสินใจ, การยืดเยื้อ, ความไม่แน่นอน.",
        "ความเจ็บปวด, การสูญเสีย, ความผิดหวัง.",
        "การพักผ่อน, การฟื้นตัว, การเยียวยา.",
        "การทะเลาะ, ความขัดแย้ง, การเอาชนะ.",
        "การเดินทาง, การหาทางออก, การปล่อยวาง.",
        "ความไม่ซื่อสัตย์, การหลบหนี, การวางแผนลับ.",
        "ความติดขัด, การถูกจำกัด, ความรู้สึกติดอยู่.",
        "ความวิตกกังวล, ความกลัว, ความเครียด.",
        "การจบสิ้น, ความเจ็บปวด, ความล้มเหลว.",
        "ความอยากรู้อยากเห็น, การเรียนรู้, การสังเกต.",
        "การกระทำที่รวดเร็ว, ความเด็ดขาด, การต่อสู้.",
        "ความชัดเจน, ความเป็นระเบียบ, การตัดสินใจ.",
        "ความยุติธรรม, การตัดสินใจที่มีเหตุผล, ความเป็นผู้นำ.",
        "โอกาสทางการเงิน, ความมั่นคง, การเริ่มต้นใหม่.",
        "การบริหารเวลา, การจัดการหลายสิ่งหลายอย่าง.",
        "การทำงานร่วมกัน, ความสำเร็จในการทำงาน.",
        "ความมั่นคงทางการเงิน, การเก็บรักษาทรัพย์สิน.",
        "ความยากจน, การขาดแคลน, การสูญเสีย.",
        "ความเมตตา, การแบ่งปัน, การให้.",
        "การวางแผนระยะยาว, ความอดทน, การรอคอย.",
        "การทำงานหนัก, การพัฒนาทักษะ, การเรียนรู้.",
        "ความสำเร็จ, ความพึงพอใจ, ความมั่งคั่ง.",
        "ความมั่นคงทางการเงิน, การสร้างมรดก, ครอบครัว.",
        "การเรียนรู้, การศึกษา, โอกาสใหม่.",
        "ความพยายาม, ความรับผิดชอบ, ความละเอียดรอบคอบ.",
        "ความมั่นคง, การดูแล, ความเอาใจใส่.",
        "ความมั่งคั่ง, ความสำเร็จ, ความเป็นผู้นำในด้านการเงิน."
    ];


for (let i = 0; i < totalCards; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-card-id", i);

    card.addEventListener("click", function () {
        selectCard(i, card);
    });
    cardContainer.appendChild(card);
}



function shuffleCards() {
    const cards = Array.from(cardContainer.children);
    let shuffledCards = Array.from(cards);
    cards.forEach(card => {
        card.classList.add('animate');
    });
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    cardContainer.innerHTML = '';
    setTimeout(() => {
        shuffledCards.forEach(card => {
            card.classList.remove('animate');
            card.classList.add('reappear');
            cardContainer.appendChild(card);
        });
    }, 1000);
}



function selectCard(cardId, cardElement) {
    if (selectedCards.length >= cardLimit) {
        Message_error.textContent = "คุณเลือกไพ่ครบตามจำนวนที่กำหนดแล้ว!";
        return;
    }
    selectedCards.push(cardId);
    const selectedCard = document.createElement("div");
    selectedCard.classList.add("selected-card");
    selectedCardContainer.appendChild(selectedCard);
    cardElement.style.display = "none";
    Message_error.textContent = "";
}

function showPrediction() {
    if (selectedCards.length > 0) {
        let predictions = selectedCards.map(cardId => card_Predictions[cardId]);
        predictionContainer.innerHTML = predictions.join(" <br> ");
    } else {
        predictionContainer.textContent = "กรุณาเลือกการ์ดก่อน!";
    }
}


function resetSelection() {
    selectedCards = [];
    selectedCardContainer.innerHTML = "";
    predictionContainer.textContent = "";
    Message_error.textContent = "";

    Array.from(cardContainer.children).forEach(card => {
        card.style.display = "block";
    });
}




cardLimitSelect.addEventListener("change", function () {
    cardLimit = parseInt(this.value);
    resetSelection();
});
showPredictionButton.addEventListener("click", showPrediction);
shuffleButton.addEventListener("click", shuffleCards);