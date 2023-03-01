
export type {
    Profile,
    ProfileSchema
} from 'entities/Profile/model/types/profile'

export {
    profileSlice,
    profileReducer
} from 'entities/Profile/model/slice/profileSlice'

export { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
