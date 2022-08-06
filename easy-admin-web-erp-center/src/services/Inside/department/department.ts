import httpRequest from '@/helps/axios/httpRequest';
import { GetDepartmentRequest, PutDepartmentRequest } from './model/request/departmentRequest';

enum DepartmentsApi {
  GET_DEPARTMENT = '/department',
  PUT_DEPARTMENT = '/department',
}

/**
 * 获取部门列表
 */
export function getDepartments() {
  return httpRequest.get<null, GetDepartmentRequest[]>(DepartmentsApi.GET_DEPARTMENT);
}

/**
 * 获取部门详情
 * @param depId 
 */
export function getDepartmentInfo(depId: string) {
  return httpRequest.get<null, GetDepartmentRequest>(`${DepartmentsApi.GET_DEPARTMENT}/${depId}`);
}

/**
 * 删除部门
 * @param depId 
 */
export function delDepartmentById(depId: string) {
  return httpRequest.delete<null, null>(`${DepartmentsApi.GET_DEPARTMENT}/${depId}`);
}

/**
 * 创建部门
 * @param putDepartmentRequest 
 */
export function putDepartment(putDepartmentRequest: PutDepartmentRequest) {
  return httpRequest.put<PutDepartmentRequest, null>(DepartmentsApi.PUT_DEPARTMENT, putDepartmentRequest)
}