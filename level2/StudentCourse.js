const GRADE_PASS_THRESHOLD = 5.5;
const GRADUATION_CREDITS = 30;

class Student {

}

class Course {
  
}

const assert = require("chai").assert;

describe('Student', function() {
  it('should initially be empty', function() {
    let blankStudent = new Student("Potato");
    assert.equal(blankStudent.name, "Potato");
    assert.equal(blankStudent.credits, 0);
    assert.deepEqual(blankStudent.grades, {});

    assert.isNotOk(blankStudent.canGraduate());
  });

  it('should be able to be enrolled to a Course', function() {
    let student = new Student("Potato");
    let course = new Course("PTWDI", GRADUATION_CREDITS, 5);

    assert.isNotOk(course.isStudentEnrolled(student));

    assert.isOk(course.enrollStudent(student));
    assert.isOk(course.isStudentEnrolled(student));
  });

  it('cannot be enrolled to the same Course twice', function() {
    let student = new Student("Potato");
    let course = new Course("PTWDI", GRADUATION_CREDITS, 5);

    assert.isOk(course.enrollStudent(student));
    assert.isNotOk(course.enrollStudent(student));
  });

  it('cannot get a grade for a course he is not enrolled in', function() {
    let student = new Student("Potato");
    let course = new Course("PTWDI", GRADUATION_CREDITS, 5);

    assert.isNotOk(student.registerGrade(course, 6));
  });

  it('should be able to pass a Course and get credits', function() {
    let student = new Student("Potato");
    let course = new Course("PTWDI", 5, 1);

    assert.isOk(course.enrollStudent(student));
    assert.isOk(student.registerGrade(course, 6));
    assert.equal(student.getGrade(course), 6);
    assert.equal(student.credits, 5);

    // student is unenrolled after getting a grade for the course
    assert.isNotOk(course.isStudentEnrolled(student));
  });

  it('should be able to fail a course and not get credits', function() {
    let student = new Student("Potato");
    let course = new Course("PTWDI", 5, 1);

    assert.isOk(course.enrollStudent(student));
    assert.isOk(student.registerGrade(course, 4));
    assert.equal(student.getGrade(course), 4);
    assert.equal(student.credits, 0);
  });

  it('should be able to take up a failed course again', function() {
    let student = new Student("Potato");
    let course = new Course("PTWDI", 5, 1);

    assert.isOk(course.enrollStudent(student));
    assert.isOk(student.registerGrade(course, 4));

    assert.isOk(course.enrollStudent(student));
    assert.isOk(student.registerGrade(course, 6));
    assert.equal(student.getGrade(course), 6);
  });

  it('should be able to graduate with enough credits', function() {
    let student = new Student("Potato");
    let course = new Course("PTWDI", GRADUATION_CREDITS, 1);

    assert.isOk(course.enrollStudent(student));
    assert.isOk(student.registerGrade(course, 9));
    assert.equal(student.credits, GRADUATION_CREDITS);
    assert.isOk(student.canGraduate());
  });

  it('cannot enroll to a full course', function() {
    let dummyCourse = new Course("Dummy", 0, /*capacity=*/0);
    let student = new Student("Joe");

    assert.isNotOk(dummyCourse.enrollStudent(student));
  });
});