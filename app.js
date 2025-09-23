// --- CareFlow Application Logic ---

class CareFlowApp {
    constructor() {
        this.currentLanguage = 'en';
        this.tokenCounter = 100;
        this.translations = {
            en: {
                careflowTitle: 'CareFlow', aiOpdForecast: 'AI OPD Forecast', patients: 'Patients', avgWait: 'Avg. wait time', mins: 'mins',
                bedAvailability: 'Bed Availability', beds: 'Beds', acrossAllWards: 'Across all wards', bedAdmission: 'Bed Admission',
                bedsFree: 'Beds Free', customizeStay: 'Customize your stay', bookBed: 'Book a Bed',
                generalOpdToken: 'General OPD Token', generalTokenDesc: 'Get a general token and the next available doctor will see you.',
                getGeneralToken: 'Get General Token', emergency: 'Emergency?',
                emergencyDesc: 'Click here for immediate assistance. No forms needed.', getEmergencyToken: 'Get Emergency Help',
                doctorAvailability: 'Doctor Availability', allDepartments: 'All Departments', deptGeneral: 'General', deptCardiology: 'Cardiology',
                deptOrthopedics: 'Orthopedics', deptPediatrics: 'Pediatrics', helpDesk: 'Help Desk', getToken: 'Get Token',
                howToReceiveToken: 'How would you like to receive your token?', tokenWithWhatsapp: 'Get Token with WhatsApp Updates',
                tokenForKiosk: 'Just Get Token (for Kiosk)', kioskDesc: 'Choose this if you are at a hospital kiosk.',
                cancel: 'Cancel', tokenIssued: 'Token Issued!', yourTokenNumberIs: 'Your token number is', done: 'Done',
                bedBookingTitle: 'Bed Booking & Customization',
                bedBookingDesc: "Select ward type and preferences. Admission requires a doctor's slip.",
                selectWard: '1. Select Ward Type', specialServices: '2. Special Services', bookingSummary: 'Booking Summary',
                wardType: 'Ward Type', totalPerDay: 'Total (Per Day)', paymentMethod: 'Payment Method', payByQR: 'UPI / QR Code',
                payByCash: 'Cash at machine', scanQr: 'Scan QR to complete payment', confirmBooking: 'Confirm Booking', available: 'available',
                privateWard: 'Private Ward', icu: 'ICU', privateNurse: 'Private Nurse', dietPlan: 'Specialized Diet Plan', physio: 'In-Room Physiotherapy',
                cashInstructionsTitle: 'Instructions for Cash Payment',
                cashInstructionsBody: "Please don't fold the cash. Insert notes properly into the machine under the counter.",
                helpIsOnTheWay: "Help is on the way!",
                helpDeskMessage: "The staff will get you soon. Please wait a minute, they are arriving.",
                emergencyAlertTitle: "Emergency Alert!",
                emergencyAlertMessage: "Please proceed to the Emergency Room immediately. Staff have been notified.",
                room: "Room", floor: "Floor",
                drKrishnaPriya: 'Dr. Krishna Priya', drDeepak: 'Dr. Deepak', drOliviaChen: 'Dr. Olivia Chen',
                drMarcusRodriguez: 'Dr. Marcus Rodriguez', drSofiaKhan: 'Dr. Sofia Khan', drLeoMaxwell: 'Dr. Leo Maxwell'
            },
            hi: {
                careflowTitle: 'केयरफ्लो', aiOpdForecast: 'AI ओपीडी पूर्वानुमान', patients: 'मरीजों', avgWait: 'औसत प्रतीक्षा', mins: 'मिनट',
                bedAvailability: 'बिस्तर की उपलब्धता', beds: 'बिस्तर', acrossAllWards: 'सभी वार्डों में', bedAdmission: 'बिस्तर प्रवेश',
                bedsFree: 'बिस्तर खाली', customizeStay: 'अपने रहने को अनुकूलित करें', bookBed: 'बिस्तर बुक करें',
                generalOpdToken: 'सामान्य ओपीडी टोकन', generalTokenDesc: 'एक सामान्य टोकन प्राप्त करें और अगला उपलब्ध डॉक्टर आपको देखेगा।',
                getGeneralToken: 'सामान्य टोकन प्राप्त करें', emergency: 'आपातकालीन?',
                emergencyDesc: 'तत्काल सहायता के लिए यहां क्लिक करें। किसी फॉर्म की आवश्यकता नहीं है।', getEmergencyToken: 'आपातकालीन सहायता प्राप्त करें',
                doctorAvailability: 'डॉक्टर की उपलब्धता', allDepartments: 'सभी विभाग', deptGeneral: 'सामान्य', deptCardiology: 'हृदय रोग',
                deptOrthopedics: 'अस्थिरोग', deptPediatrics: 'बाल रोग', helpDesk: 'सहायता केंद्र', getToken: 'टोकन प्राप्त करें',
                howToReceiveToken: 'आप अपना टोकन कैसे प्राप्त करना चाहेंगे?', tokenWithWhatsapp: 'व्हाट्सएप अपडेट के साथ टोकन प्राप्त करें',
                tokenForKiosk: 'बस टोकन प्राप्त करें (कियोस्क के लिए)', kioskDesc: 'यदि आप अस्पताल कियोस्क पर हैं तो इसे चुनें।',
                cancel: 'रद्द करना', tokenIssued: 'टोकन जारी किया गया!', yourTokenNumberIs: 'आपका टोकन नंबर है', done: 'पूर्ण',
                bedBookingTitle: 'बिस्तर बुकिंग और अनुकूलन',
                bedBookingDesc: 'वार्ड का प्रकार और प्राथमिकताएं चुनें। प्रवेश के लिए डॉक्टर की पर्ची आवश्यक है।',
                selectWard: '1. वार्ड का प्रकार चुनें', specialServices: '2. विशेष सेवाएं', bookingSummary: 'बुकिंग सारांश',
                wardType: 'वार्ड का प्रकार', totalPerDay: 'कुल (प्रति दिन)', paymentMethod: 'भुगतान विधि', payByQR: 'UPI / QR कोड',
                payByCash: 'मशीन पर नकद', scanQr: 'भुगतान पूरा करने के लिए क्यूआर स्कैन करें', confirmBooking: 'बुकिंग की पुष्टि करें', available: 'उपलब्ध',
                privateWard: 'निजी वार्ड', icu: 'ICU', privateNurse: 'निजी नर्स', dietPlan: 'विशेष आहार योजना', physio: 'इन-रूम फिजियोथेरेपी',
                cashInstructionsTitle: 'नकद भुगतान के लिए निर्देश',
                cashInstructionsBody: 'कृपया नकदी को मोड़ें नहीं। काउंटर के नीचे मशीन में नोटों को ठीक से डालें।',
                helpIsOnTheWay: 'मदद रास्ते में है!',
                helpDeskMessage: 'कर्मचारी जल्द ही आपके पास पहुंचेंगे। कृपया एक मिनट प्रतीक्षा करें, वे आ रहे हैं।',
                emergencyAlertTitle: "आपातकालीन चेतावनी!",
                emergencyAlertMessage: "कृपया तुरंत आपातकालीन कक्ष में जाएं। कर्मचारियों को सूचित कर दिया गया है।",
                room: "कमरा", floor: "मंज़िल",
                drKrishnaPriya: 'डॉ. कृष्णा प्रिया', drDeepak: 'डॉ. दीपक', drOliviaChen: 'डॉ. ओलिविया चेन',
                drMarcusRodriguez: 'डॉ. मार्कस रोड्रिगेज', drSofiaKhan: 'डॉ. सोफिया खान', drLeoMaxwell: 'डॉ. लियो मैक्सवेल'
            },
            ta: {
                careflowTitle: 'கேர்ஃப்ளோ', aiOpdForecast: 'AI ஓபிடி முன்னறிவிப்பு', patients: 'நோயாளிகள்', avgWait: 'சராசரி காத்திருப்பு', mins: 'நிமிடம்',
                bedAvailability: 'படுக்கை இருப்பு', beds: 'படுக்கைகள்', acrossAllWards: 'அனைத்து வார்டுகளிலும்', bedAdmission: 'படுக்கை சேர்க்கை',
                bedsFree: 'படுக்கைகள் காலி', customizeStay: 'தங்குமிடத்தைத் தனிப்பயனாக்குங்கள்', bookBed: 'படுக்கை பதிவு செய்',
                generalOpdToken: 'பொது ஓபிடி டோக்கன்', generalTokenDesc: 'பொது டோக்கனைப் பெறுங்கள், அடுத்த மருத்துவர் உங்களைப் பார்ப்பார்.',
                getGeneralToken: 'பொது டோக்கன் பெறு', emergency: 'அவசரம்?',
                emergencyDesc: 'உடனடி உதவிக்கு இங்கே கிளிக் செய்யவும். படிவங்கள் தேவையில்லை.', getEmergencyToken: 'அவசர உதவி பெறு',
                doctorAvailability: 'மருத்துவர் இருப்பு', allDepartments: 'அனைத்து துறைகளும்', deptGeneral: 'பொது மருத்துவம்', deptCardiology: 'இதயவியல்',
                deptOrthopedics: 'எலும்பியல்', deptPediatrics: 'குழந்தை மருத்துவம்', helpDesk: 'உதவி மையம்', getToken: 'டோக்கன் பெறு',
                howToReceiveToken: 'டோக்கனை எப்படிப் பெற விரும்புகிறீர்கள்?', tokenWithWhatsapp: 'வாட்ஸ்அப் மூலம் டோக்கன் பெறு',
                tokenForKiosk: 'டோக்கனை மட்டும் பெறு (கியோஸ்க்)', kioskDesc: 'நீங்கள் மருத்துவமனை கியோஸ்கில் இருந்தால் இதைத் தேர்ந்தெடுக்கவும்.',
                cancel: 'ரத்துசெய்', tokenIssued: 'டோக்கன் வழங்கப்பட்டது!', yourTokenNumberIs: 'உங்கள் டோக்கன் எண்', done: 'முடிந்தது',
                bedBookingTitle: 'படுக்கை முன்பதிவு',
                bedBookingDesc: 'வார்டு வகை மற்றும் விருப்பங்களைத் தேர்ந்தெடுக்கவும். சேர்க்கைக்கு மருத்துவரின் சீட்டு தேவை.',
                selectWard: '1. வார்டு வகையைத் தேர்ந்தெடுக்கவும்', specialServices: '2. சிறப்பு சேவைகள்', bookingSummary: 'முன்பதிவு சுருக்கம்',
                wardType: 'வார்டு வகை', totalPerDay: 'மொத்தம் (ஒரு நாளைக்கு)', paymentMethod: 'பணம் செலுத்தும் முறை', payByQR: 'UPI / QR குறியீடு',
                payByCash: 'இயந்திரத்தின் கீழ் பணம்', scanQr: 'பணம் செலுத்த QR குறியீட்டை ஸ்கேன் செய்யவும்', confirmBooking: 'முன்பதிவை உறுதிசெய்', available: 'கிடைக்கிறது',
                privateWard: 'தனி அறை', icu: 'ICU', privateNurse: 'தனிப்பட்ட செவிலியர்', dietPlan: 'சிறப்பு உணவு திட்டம்', physio: 'அறையில் பிசியோதெரபி',
                cashInstructionsTitle: 'ரொக்கப் பணம் செலுத்துவதற்கான வழிமுறைகள்',
                cashInstructionsBody: 'பணத்தை மடிக்க வேண்டாம். கவுண்டரின் கீழ் உள்ள இயந்திரத்தில் நோட்டுகளை சரியாகச் செருகவும்.',
                helpIsOnTheWay: 'உதவி வருகிறது!',
                helpDeskMessage: 'ஊழியர்கள் விரைவில் உங்களைக் கவனிப்பார்கள். ஒரு நிமிடம் காத்திருக்கவும்.',
                emergencyAlertTitle: 'அவசர எச்சரிக்கை!',
                emergencyAlertMessage: 'தயவுசெய்து உடனடியாக அவசர சிகிச்சைப் பிரிவுக்குச் செல்லவும். ஊழியர்களுக்குத் தெரிவிக்கப்பட்டுள்ளது.',
                room: 'அறை', floor: 'தளம்',
                drKrishnaPriya: 'டாக்டர். கிருஷ்ணா பிரியா', drDeepak: 'டாக்டர். தீபக்', drOliviaChen: 'டாக்டர். ஒலிவியா சென்',
                drMarcusRodriguez: 'டாக்டர். மார்கஸ் ரோட்ரிக்ஸ்', drSofiaKhan: 'டாக்டர். சோபியா கான்', drLeoMaxwell: 'டாக்டர். லியோ மேக்ஸ்வெல்'
            },
            ml: {
                careflowTitle: 'കെയർഫ്ലോ', aiOpdForecast: 'AI ഒപിഡി പ്രവചനം', patients: 'രോഗികൾ', avgWait: 'ശരാശരി കാത്തിരിപ്പ്', mins: 'മിനിറ്റ്',
                bedAvailability: 'കിടക്ക ലഭ്യത', beds: 'കിടക്കകൾ', acrossAllWards: 'എല്ലാ വാർഡുകളിലും', bedAdmission: 'കിടക്ക പ്രവേശനം',
                bedsFree: 'കിടക്കകൾ ഒഴിവുണ്ട്', customizeStay: 'നിങ്ങളുടെ താമസം ക്രമീകരിക്കുക', bookBed: 'കിടക്ക ബുക്ക് ചെയ്യുക',
                generalOpdToken: 'ജനറൽ ഒപിഡി ടോക്കൺ', generalTokenDesc: 'ഒരു ജനറൽ ടോക്കൺ നേടുക, അടുത്ത ലഭ്യമായ ഡോക്ടർ നിങ്ങളെ കാണും.',
                getGeneralToken: 'ജനറൽ ടോക്കൺ നേടുക', emergency: 'അടിയന്തരാവസ്ഥ?',
                emergencyDesc: 'ഉടനടി സഹായത്തിനായി ഇവിടെ ക്ലിക്ക് ചെയ്യുക. ഫോമുകൾ ആവശ്യമില്ല.', getEmergencyToken: 'അടിയന്തര സഹായം നേടുക',
                doctorAvailability: 'ഡോക്ടറുടെ ലഭ്യത', allDepartments: 'എല്ലാ വകുപ്പുകളും', deptGeneral: 'ജനറൽ മെഡിസിൻ', deptCardiology: 'കാർഡിയോളജി',
                deptOrthopedics: 'ഓർത്തോപീഡിക്സ്', deptPediatrics: 'പീഡിയാട്രിക്സ്', helpDesk: 'സഹായ കേന്ദ്രം', getToken: 'ടോക്കൺ നേടുക',
                howToReceiveToken: 'ടോക്കൺ എങ്ങനെ ലഭിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നു?', tokenWithWhatsapp: 'വാട്ട്‌സ്ആപ്പ് വഴി ടോക്കൺ നേടുക',
                tokenForKiosk: 'ടോക്കൺ മാത്രം നേടുക (കിയോസ്‌ക്)', kioskDesc: 'നിങ്ങൾ ആശുപത്രി കിയോസ്‌കിലാണെങ്കിൽ ഇത് തിരഞ്ഞെടുക്കുക.',
                cancel: 'റദ്ദാക്കുക', tokenIssued: 'ടോക്കൺ നൽകി!', yourTokenNumberIs: 'നിങ്ങളുടെ ടോക്കൺ നമ്പർ', done: 'ശരി',
                bedBookingTitle: 'കിടക്ക ബുക്കിംഗ്',
                bedBookingDesc: 'വാർഡ് തരവും മുൻഗണനകളും തിരഞ്ഞെടുക്കുക. പ്രവേശനത്തിന് ഡോക്ടറുടെ കുറിപ്പ് ആവശ്യമാണ്.',
                selectWard: '1. വാർഡ് തരം തിരഞ്ഞെടുക്കുക', specialServices: '2. പ്രത്യേക സേവനങ്ങൾ', bookingSummary: 'ബുക്കിംഗ് സംഗ്രഹം',
                wardType: 'വാർഡ് തരം', totalPerDay: 'ആകെ (ഒരു ദിവസത്തേക്ക്)', paymentMethod: 'പണമടയ്ക്കാനുള്ള രീതി', payByQR: 'യുപിഐ / ക്യുആർ കോഡ്',
                payByCash: 'മെഷീന്റെ കീഴിൽ പണം', scanQr: 'പണമടയ്ക്കാൻ QR കോഡ് സ്കാൻ ചെയ്യുക', confirmBooking: 'ബുക്കിംഗ് സ്ഥിരീകരിക്കുക', available: 'ലഭ്യമാണ്',
                privateWard: 'പ്രൈവറ്റ് വാർഡ്', icu: 'ICU', privateNurse: 'പ്രൈവറ്റ് നഴ്സ്', dietPlan: 'പ്രത്യേക ഡയറ്റ് പ്ലാൻ', physio: 'ഇൻ-റൂം ഫിസിയോതെറാപ്പി',
                cashInstructionsTitle: 'പണമായി അടയ്‌ക്കുന്നതിനുള്ള നിർദ്ദേശങ്ങൾ',
                cashInstructionsBody: 'ദയവായി പണം മടക്കരുത്. കൗണ്ടറിന് താഴെയുള്ള മെഷീനിൽ നോട്ടുകൾ ശരിയായി ഇടുക.',
                helpIsOnTheWay: 'സഹായം എത്തുന്നു!',
                helpDeskMessage: 'ജീവനക്കാർ ഉടൻ നിങ്ങളെ സമീപിക്കും. ദയവായി ഒരു മിനിറ്റ് കാത്തിരിക്കുക.',
                emergencyAlertTitle: 'അടിയന്തര മുന്നറിയിപ്പ്!',
                emergencyAlertMessage: 'ദയവായി ഉടൻ എമർജൻസി റൂമിലേക്ക് പോകുക. ജീവനക്കാരെ അറിയിച്ചിട്ടുണ്ട്.',
                room: 'മുറി', floor: 'നില',
                drKrishnaPriya: 'ഡോ. കൃഷ്ണ പ്രിയ', drDeepak: 'ഡോ. ദീപക്', drOliviaChen: 'ഡോ. ഒലിവിയ ചെൻ',
                drMarcusRodriguez: 'ഡോ. മാർക്കസ് റോഡ്രിഗസ്', drSofiaKhan: 'ഡോ. സോഫിയ ഖാൻ', drLeoMaxwell: 'ഡോ. ലിയോ മാക്സ്വെൽ'
            }
        };
        // Raw data for the application
        this.data = {
            forecast: { patients: 134, waitTime: 45 },
            doctors: [
                { nameKey: 'drKrishnaPriya', department: 'General', status: 'Available', room: 101, floor: 1 },
                { nameKey: 'drDeepak', department: 'Cardiology', status: 'Busy', room: 202, floor: 2 },
                { nameKey: 'drOliviaChen', department: 'General', status: 'Available', room: 102, floor: 1 },
                { nameKey: 'drMarcusRodriguez', department: 'Orthopedics', status: 'Not Arrived', room: 301, floor: 3 },
                { nameKey: 'drSofiaKhan', department: 'Pediatrics', status: 'Available', room: 405, floor: 4 },
                { nameKey: 'drLeoMaxwell', department: 'General', status: 'Busy', room: 103, floor: 1 },
            ],
            beds: {
                available: 13,
                wards: [
                    { name: 'General Ward', key: 'deptGeneral', available: 4, cost: 1500 },
                    { name: 'Private Ward', key: 'privateWard', available: 8, cost: 4000 },
                    { name: 'ICU', key: 'icu', available: 1, cost: 7500 },
                ],
                services: [
                    { name: 'Private Nurse', key: 'privateNurse', cost: 2000 },
                    { name: 'Specialized Diet Plan', key: 'dietPlan', cost: 500 },
                    { name: 'In-Room Physiotherapy', key: 'physio', cost: 800 },
                ],
            }
        };
        this.bookingState = {};
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setLanguage(this.currentLanguage);
    }

    setupEventListeners() {
        document.getElementById('languageSelector').addEventListener('change', (e) => this.setLanguage(e.target.value));
        document.getElementById('bookBedBtn').addEventListener('click', () => {
            this.resetBookingModal();
            this.openModal('bedBookingModal');
        });
        document.getElementById('generalTokenBtn').addEventListener('click', () => this.openTokenModal());
        document.getElementById('departmentFilter').addEventListener('change', () => this.renderDoctors());
        document.getElementById('confirmBookingBtn').addEventListener('click', () => this.confirmBooking());
        document.getElementById('helpDeskBtn').addEventListener('click', () => this.openModal('helpDeskModal'));
        document.getElementById('emergencyBtn').addEventListener('click', () => this.openModal('emergencyModal'));

        document.querySelectorAll('.modal-close, .btn--tertiary, [data-modal-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modalId = e.currentTarget.dataset.modalId;
                if (modalId) this.closeModal(modalId);
            });
        });

        document.body.addEventListener('click', (e) => {
            const tokenBtn = e.target.closest('.get-token-btn');
            if (tokenBtn) {
                const doctorName = tokenBtn.closest('.doctor-card').querySelector('h4').textContent;
                this.openTokenModal(doctorName);
            }
            if (e.target.closest('#tokenViaWhatsappBtn') || e.target.closest('#tokenForKioskBtn')) {
                this.issueToken();
            }
        });
        
        document.getElementById('wardSelection').addEventListener('change', () => this.updateBookingSummary());
        document.getElementById('serviceSelection').addEventListener('change', () => this.updateBookingSummary());
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.handlePaymentMethodChange(e.target.value));
        });
    }
    
    setLanguage(lang) {
        if (!this.translations[lang]) return;
        this.currentLanguage = lang;
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.dataset.lang;
            if (this.translations[lang][key]) {
                el.textContent = this.translations[lang][key];
            }
        });
        this.renderAll();
    }

    renderAll() {
        this.renderDashboardCards();
        this.renderDoctors();
        this.renderBedBookingOptions();
    }

    renderDashboardCards() {
        const lang = this.currentLanguage;
        const forecast = this.data.forecast;
        document.getElementById('forecastPatients').textContent = `${forecast.patients} ${this.translations[lang].patients}`;
        document.getElementById('forecastWaitTime').textContent = `${this.translations[lang].avgWait}: ${forecast.waitTime} ${this.translations[lang].mins}`;
        document.getElementById('availableBeds').textContent = `${this.data.beds.available} ${this.translations[lang].beds}`;
        document.getElementById('freeBeds').textContent = `${this.data.beds.available} ${this.translations[lang].bedsFree}`;
    }

    renderDoctors() {
        const list = document.getElementById('doctorList');
        const filter = document.getElementById('departmentFilter').value;
        const lang = this.currentLanguage;
        list.innerHTML = '';
        
        const filteredDoctors = this.data.doctors.filter(doc => filter === 'All' || doc.department === filter);
        
        filteredDoctors.forEach(doc => {
            const statusClass = doc.status.toLowerCase().replace(/\s+/g, '-');
            const card = document.createElement('div');
            card.className = 'doctor-card';
            const doctorName = this.translations[lang][doc.nameKey] || doc.nameKey;

            card.innerHTML = `
                <div class="doctor-avatar"></div>
                <div class="doctor-info">
                    <h4>${doctorName}</h4>
                    <p class="doctor-location">${this.translations[lang].room} ${doc.room}, ${this.translations[lang].floor} ${doc.floor}</p>
                    <p>
                        <span class="doctor-status status-${statusClass}">${doc.status}</span>
                        • ${this.translations[lang][`dept${doc.department}`] || doc.department}
                    </p>
                </div>
                <button class="btn btn--primary get-token-btn" data-lang="getToken">${this.translations[lang].getToken}</button>
            `;
            list.appendChild(card);
        });
    }

    renderBedBookingOptions() {
        const wardContainer = document.getElementById('wardSelection');
        const lang = this.currentLanguage;
        wardContainer.innerHTML = '';
        this.data.beds.wards.forEach(ward => {
            const wardId = `ward-${ward.name.replace(' ', '')}`;
            wardContainer.innerHTML += `
                <label for="${wardId}"><input type="radio" name="ward" id="${wardId}" value="${ward.name}">
                    <div class="ward-option"><strong>${this.translations[lang][ward.key] || ward.name}</strong>
                    <span>${ward.available} ${this.translations[lang].available}</span></div></label>`;
        });
        
        const serviceContainer = document.getElementById('serviceSelection');
        serviceContainer.innerHTML = '';
        this.data.beds.services.forEach(service => {
            const serviceId = `service-${service.name.replace(/\s+/g, '')}`;
            serviceContainer.innerHTML += `
                 <label for="${serviceId}"><input type="checkbox" name="service" id="${serviceId}" value="${service.name}">
                    <div class="service-option"><span>${this.translations[lang][service.key] || service.name}</span>
                    <strong>+ ₹${service.cost.toLocaleString()}</strong></div></label>`;
        });
    }

    openModal(modalId) { 
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('hidden');
    }
    closeModal(modalId) { 
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('hidden');
    }

    openTokenModal(doctorName = null) {
        const title = document.getElementById('tokenModalTitle');
        const subtitle = document.getElementById('tokenModalSubtitle');
        this.activeTokenRequest = { doctor: doctorName };
        const lang = this.currentLanguage;

        if (doctorName) {
            title.textContent = `${this.translations[lang].getToken} for ${doctorName}`;
            subtitle.textContent = `You will be added to the queue for ${doctorName}.`;
        } else {
            title.textContent = this.translations[lang].getGeneralToken;
            subtitle.textContent = 'You will be added to the general OPD queue.';
        }
        this.openModal('tokenModal');
    }
    
    issueToken() {
        this.closeModal('tokenModal');
        this.tokenCounter++;
        const tokenNumber = `G-${this.tokenCounter}`;
        document.getElementById('issuedTokenNumber').textContent = tokenNumber;
        const doctorInfoEl = document.getElementById('issuedTokenDoctor');
        doctorInfoEl.textContent = this.activeTokenRequest.doctor ? `For ${this.activeTokenRequest.doctor}` : `For General OPD`;
        this.openModal('tokenIssuedModal');
    }

    updateBookingSummary() {
        let total = 0;
        const lang = this.currentLanguage;
        const selectedWardInput = document.querySelector('input[name="ward"]:checked');
        this.bookingState.ward = null;
        if (selectedWardInput) {
            const wardData = this.data.beds.wards.find(w => w.name === selectedWardInput.value);
            if (wardData) {
                total += wardData.cost;
                document.getElementById('summaryWard').textContent = this.translations[lang][wardData.key] || wardData.name;
                this.bookingState.ward = wardData;
            }
        } else { document.getElementById('summaryWard').textContent = '--'; }
        
        this.bookingState.services = [];
        document.querySelectorAll('input[name="service"]:checked').forEach(input => {
            const serviceData = this.data.beds.services.find(s => s.name === input.value);
            if (serviceData) {
                total += serviceData.cost;
                this.bookingState.services.push(serviceData);
            }
        });
        
        this.bookingState.totalCost = total;
        document.getElementById('summaryTotal').textContent = `₹ ${total.toLocaleString()}`;
    }
    
    resetBookingModal() {
        document.querySelectorAll('#wardSelection input, #serviceSelection input').forEach(input => input.checked = false);
        document.getElementById('pay-qr').checked = true;
        this.handlePaymentMethodChange('qr');
        this.updateBookingSummary();
        document.getElementById('confirmBookingBtn').textContent = this.translations[this.currentLanguage].confirmBooking;
        this.bookingState = {};
    }

    handlePaymentMethodChange(method) {
        document.getElementById('qr-payment-info').classList.toggle('hidden', method !== 'qr');
        document.getElementById('cash-payment-info').classList.toggle('hidden', method !== 'cash');
    }
    
    confirmBooking() {
        if (!this.bookingState.ward) {
            const modalContent = document.querySelector('#bedBookingModal .modal-content');
            modalContent.style.border = '2px solid red';
            setTimeout(() => { modalContent.style.border = 'none'; }, 500);
            return;
        }
        alert("Booking Confirmed!"); // Placeholder for actual confirmation logic
        this.closeModal('bedBookingModal');
    }
}

document.addEventListener('DOMContentLoaded', () => { new CareFlowApp(); });
