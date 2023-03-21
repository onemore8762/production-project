export { getProfileData } from './model/selectors/getProfileData/getProfileData'
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'
export { getProfileError } from './model/selectors/getProfileError/getProfileError'
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'
export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm'

export type {
    Profile,
    ProfileSchema
} from 'entities/Profile/model/types/profile'

export {
    profileActions,
    profileReducer
} from 'entities/Profile/model/slice/profileSlice'

export { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
export { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData'
