import request from '@/utils/request'

export default {
  // 讲师列表(条件查询分页)

  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: `/eduService/teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      // json对象
      data: teacherQuery
    })
  },
  removeTeacherById(id) {
    return request({
      url: `/eduService/teacher/deleteTeacher/${id}`,
      method: `post`
    })
  },
  addTeacher(teacher) {
    return request({
      url: `/eduService/teacher/addTeacher`,
      method: `post`,
      data: teacher
    })
  },
  updateTeacher(teacher) {
    return request({
      url: `/eduService/teacher/updateTeacher`,
      method: `post`,
      data: teacher
    })
  },
  getTeacher(id) {
    return request({
      url: `/eduService/teacher/getTeacher/${id}`,
      method: `get`
    })
  }
}
