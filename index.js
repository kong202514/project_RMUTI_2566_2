let card_container = document.getElementById("card-container"),
    selected_card = document.getElementById("selected-card-container"),
    prediction_container = document.getElementById("prediction-container"),
    showPredictionButton = document.getElementById("show-prediction-btn"),
    shuffleButton = document.getElementById("shuffle-btn"),
    cardLimitSelect = document.getElementById("card-limit"),
    Message_error = document.getElementById("error-message"),
    totalCards = 78,
    cardLimit = parseInt(cardLimitSelect.value),
    selectedCards = [],
    Predictions_card = [
        "คุณมีคุณค่าเสมอ ไม่ว่าในสถานการณ์ไหน",
        "ทุกความพยายามของคุณมีความหมาย",
        "คุณสมควรได้รับความรักและความสุข",
        "แม้วันนี้จะหนัก แต่พรุ่งนี้จะดีขึ้น",
        "คุณเข้มแข็งกว่าที่คุณคิด",
        "การเติบโตต้องใช้เวลา อย่าเร่งรัดตัวเอง",
        "ไม่เป็นไรถ้าคุณรู้สึกเหนื่อย หยุดพักบ้างก็ได้",
        "ความผิดพลาดไม่ได้ทำให้คุณล้มเหลว แต่มันทำให้คุณเรียนรู้",
        "ทุกช่วงเวลาที่ผ่านมาทำให้คุณเป็นคุณในวันนี้",
        "จงภูมิใจในตัวเอง แม้แต่ก้าวเล็กๆ ก็สำคัญ",
        "ไม่มีใครสมบูรณ์แบบ และคุณก็ไม่จำเป็นต้องเป็น",
        "คุณไม่ได้อยู่ตัวคนเดียว ยังมีคนที่รักคุณเสมอ",
        "รอยยิ้มของคุณมีพลังมากกว่าที่คุณคิด",
        "เสียงหัวใจของคุณก็สำคัญ ฟังมันให้ดี",
        "ไม่มีความรู้สึกไหนผิด ทุกความรู้สึกของคุณมีเหตุผล",
        "การดูแลตัวเองไม่ใช่ความเห็นแก่ตัว",
        "แม้วันนี้จะยังไม่ดี แต่ก็ไม่ได้หมายความว่าพรุ่งนี้จะไม่ดี",
        "ไม่มีอะไรอยู่กับเราตลอดไป ทั้งความทุกข์และความสุข",
        "คุณไม่ได้ต้องการการอนุมัติจากใครเพื่อเป็นตัวเอง",
        "คนที่รักคุณจะรักคุณในแบบที่คุณเป็น",
        "แม้แต่แสงเล็กๆ ก็ทำให้ความมืดจางลงได้",
        "เวลาจะช่วยเยียวยาทุกสิ่งเสมอ",
        "อนาคตยังมีความเป็นไปได้อีกมากมาย",
        "การเริ่มต้นใหม่ไม่มีคำว่าสาย",
        "หัวใจของคุณสมควรได้รับความเมตตา",
        "น้ำตาไม่ได้หมายถึงความอ่อนแอ แต่มันคือความกล้าหาญ",
        "จงให้เวลากับตัวเองบ้าง",
        "ความสุขไม่ได้อยู่ไกล แต่อยู่ที่มุมมองของคุณ",
        "ไม่มีใครมีชีวิตที่สมบูรณ์แบบ และมันก็ไม่จำเป็นต้องเป็น",
        "การรักตัวเองคือของขวัญที่ดีที่สุดที่คุณจะให้ตัวเองได้",
        "อย่าเปรียบเทียบตัวเองกับใคร เพราะคุณมีเส้นทางของตัวเอง",
        "บางครั้งความเงียบก็เป็นคำตอบที่ดีที่สุด",
        "คุณไม่ได้ต้องทำให้ทุกคนพอใจ แค่เป็นตัวเองก็พอแล้ว",
        "การให้กำลังใจตัวเองเป็นสิ่งที่ควรทำทุกวัน",
        "สิ่งเล็กๆ ที่คุณทำในวันนี้ อาจเปลี่ยนชีวิตคุณในวันหน้า",
        "การเป็นตัวเองดีที่สุดแล้ว",
        "หยุดพักไม่ใช่การถอยหลัง แต่มันคือการเตรียมตัวให้ไปต่อ",
        "ความสุขของคุณสำคัญพอๆ กับของคนอื่น",
        "การยอมรับตัวเองเป็นจุดเริ่มต้นของความสุขที่แท้จริง",
        "อย่าปล่อยให้คำพูดของใครมากำหนดคุณค่าในตัวคุณ",
        "คุณไม่ได้ต้องเก่งทุกอย่าง แค่ทำให้ดีที่สุดก็พอ",
        "ชีวิตคือการเดินทาง ไม่ใช่การแข่งขัน",
        "ความฝันของคุณเป็นไปได้เสมอ",
        "คุณไม่ได้ล้มเหลว คุณแค่กำลังเรียนรู้",
        "การก้าวเล็กๆ ก็ถือว่าเป็นการเดินหน้าต่อ",
        "บางครั้งเราต้องหลงทางก่อนจะเจอเส้นทางที่ใช่",
        "คุณคู่ควรกับความรักที่ดีเสมอ",
        "จงให้เวลากับสิ่งที่ทำให้คุณมีความสุข",
        "ทุกอย่างที่เกิดขึ้นล้วนมีเหตุผลของมัน",
        "คุณสามารถเป็นแสงสว่างให้ตัวเองได้",
        "ไม่มีเส้นทางไหนไร้ค่า ทุกเส้นทางล้วนสอนบางสิ่ง",
        "การล้มไม่ใช่จุดจบ แต่มันคือการเริ่มต้นใหม่",
        "ความสุขไม่ได้ขึ้นอยู่กับสิ่งที่คุณมี แต่ขึ้นอยู่กับสิ่งที่คุณเป็น",
        "จงเป็นเพื่อนที่ดีที่สุดของตัวเอง",
        "บางครั้งการเดินช้าก็ยังดีกว่าการไม่เดินเลย",
        "คนที่รักคุณจริงๆ จะอยู่เคียงข้างคุณเสมอ",
        "การเปลี่ยนแปลงอาจน่ากลัว แต่มันก็พาคุณไปสู่สิ่งใหม่ๆ",
        "ชีวิตไม่ได้ต้องการความสมบูรณ์แบบ แต่มันต้องการความจริงใจ",
        "คุณสมควรได้รับความสงบสุขในหัวใจ",
        "จงให้อภัยตัวเองและก้าวต่อไป",
        "บางวันอาจจะดี บางวันอาจจะแย่ แต่นั่นคือชีวิต",
        "คุณไม่ได้เดินอยู่ลำพัง ยังมีใครบางคนที่เข้าใจคุณ",
        "ความทุกข์ที่คุณเผชิญอยู่ตอนนี้ จะทำให้คุณแข็งแกร่งขึ้น",
        "ไม่มีความพยายามไหนที่สูญเปล่า",
        "อย่ากลัวที่จะเป็นตัวเอง เพราะคุณพิเศษในแบบของคุณ",
        "ทุกวันที่ตื่นขึ้นมาเป็นโอกาสใหม่เสมอ",
        "ไม่ว่าคุณจะอยู่ตรงไหนในชีวิต คุณก็ยังมีคุณค่า",
        "การให้ตัวเองได้พักผ่อนคือสิ่งที่สำคัญ",
        "จงมองเห็นตัวเองด้วยความเมตตาเหมือนที่คุณมองคนอื่น",
        "ทุกๆ วันเป็นโอกาสใหม่ในการสร้างความสุข",
        "การให้กำลังใจตัวเองสำคัญพอๆ กับการให้กำลังใจผู้อื่น",
        "ความรักที่ดีที่สุดคือการรักตัวเอง",
        "จงเชื่อมั่นว่าคุณสามารถก้าวผ่านทุกปัญหาได้",
        "การเริ่มต้นใหม่เป็นสิทธิ์ของทุกคน",
        "คุณคือคนเดียวที่สามารถกำหนดเส้นทางชีวิตของตัวเอง",
        "ไม่ต้องรีบไปถึงเส้นชัย แค่ก้าวต่อไปก็พอแล้ว",
        "อะไรที่ผ่านไปแล้ว ปล่อยมันไป อะไรที่กำลังจะมาถึง เตรียมตัวให้พร้อม",
        "คุณมีพลังมากพอที่จะเปลี่ยนชีวิตตัวเองได้เสมอ"
    ];


newFunction();



function newFunction() {
    for (let i = 0; i < totalCards; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-card-id", i);

        card.addEventListener("click", function () {
            selectCard(i, card);
        });
        card_container.appendChild(card);
    }
}

function shuffle_cards() {
    const cards = Array.from(card_container.children);
    let shuffledCards = Array.from(cards);
    cards.forEach(card => {
        card.classList.add('animate');
    });
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    card_container.innerHTML = '';
    setTimeout(() => {
        shuffledCards.forEach(card => {
            card.classList.remove('animate');
            card.classList.add('reappear');
            card_container.appendChild(card);
        });
    }, 500);
    reset_Selection();
}



function selectCard(cardId, cardElement) {
    if (selectedCards.length >= cardLimit) {
        Message_error.textContent = "คุณเลือกไพ่ครบตามจำนวนที่กำหนดแล้ว!";
        return;
    }
    selectedCards.push(cardId);
    const selectedCard = document.createElement("div");
    selectedCard.classList.add("selected-card");
    selected_card.appendChild(selectedCard);
    cardElement.style.display = "none";
    Message_error.textContent = "";
}

function showPrediction() {
    if (selectedCards.length > 0) {
        let predictions = selectedCards.map(cardId => Predictions_card[cardId]);
        prediction_container.innerHTML = predictions.join(" <br> ");
    } else {
        prediction_container.textContent = "กรุณาเลือกการ์ดก่อน!";
    }
}


function reset_Selection() {
    selectedCards = [];
    selected_card.innerHTML = "";
    prediction_container.textContent = "";
    Message_error.textContent = "";

    Array.from(card_container.children).forEach(card => {
        card.style.display = "block";
    });
}




cardLimitSelect.addEventListener("change", function () {
    cardLimit = parseInt(this.value);
    reset_Selection();
});
showPredictionButton.addEventListener("click", showPrediction);
shuffleButton.addEventListener("click", shuffle_cards);