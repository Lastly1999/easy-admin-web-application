import httpRequest from "@/helps/axios/httpRequest"
import { GetUserInfoResponse, GetUsersRequest, PutUserRequest, UpdateUserRequest } from "./model/model"

enum userApi {
    GET_USERS = "/user",
    PUT_USER = "/user",
    UPDATE_USER = "/user",
}

/**
 * 获取用户列表
 */
export function getUsers(getUsersRequest: GetUsersRequest) {
    return httpRequest.post<GetUsersRequest, any[]>(userApi.GET_USERS, getUsersRequest)
}

/**
 * 获取用户详情
 * @param userId 
 */
export function getUserById(userId: number) {
    return httpRequest.get<any, GetUserInfoResponse>(`${userApi.GET_USERS}/${userId}`)
}

/**
 * 更新用户信息
 * @param userId 用户id
 * @param updateUserRequest  更新用户信息
 */
export function updateUser(updateUserRequest: UpdateUserRequest, userId: string) {
    return httpRequest.patch<UpdateUserRequest, undefined>(`${userApi.UPDATE_USER}/${userId}`, updateUserRequest)
}

/**
 * 创建用户
 */
export function putUser(putUserRequest: PutUserRequest) {
    return httpRequest.put<PutUserRequest, null>(userApi.PUT_USER, putUserRequest)
}