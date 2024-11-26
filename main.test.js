const classifyPatient = require('./main');

test('should classify patient as normal', () => {
    expect(classifyPatient(110, 95)).toBe('ปกติ');
});

test('should classify patient as at risk', () => {
    expect(classifyPatient(130, 110)).toBe('เสี่ยง');
});

test('should classify patient as sick level 1', () => {
    expect(classifyPatient(150, 130)).toBe('ป่วยระดับ 1');
});

test('should classify patient as sick level 2', () => {
    expect(classifyPatient(170, 160)).toBe('ป่วยระดับ 2');
});

test('should classify patient as sick level 3', () => {
    expect(classifyPatient(190, 190)).toBe('ป่วยระดับ 3');
});
