function classifyPatient(bloodPressure, bloodSugar) {
    if (bloodPressure <= 120 && bloodSugar < 100) { // 1
        return 'ปกติ'; // 2
    } else if (bloodPressure >= 120 && bloodPressure <= 139 && bloodSugar >= 100 && bloodSugar <= 125) { // 3
        return 'เสี่ยง'; // 4
    } else if (bloodPressure >= 140 && bloodPressure <= 159 && bloodSugar >= 126 && bloodSugar <= 154) { // 5
        return 'ป่วยระดับ 1'; // 6
    } else if (bloodPressure >= 160 && bloodPressure <= 179 && bloodSugar >= 155 && bloodSugar <= 182) { // 7
        return 'ป่วยระดับ 2'; // 8
    } else {
        return 'ป่วยระดับ 3'; // 9
    }
}

module.exports = classifyPatient