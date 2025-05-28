const baseApiUrl = 'https://api.hr.constel.co/api/v1';

export const apiURL = {
    login: `${baseApiUrl}/login`,
    createPost: `${baseApiUrl}/posts`,
    getComments: (postId) => `${baseApiUrl}//posts/${postId}/comments`,
    likePost: (postId) => `${baseApiURL}/posts/${postId}/like`,
    createComment: (postId) => `${baseApiURL}/posts/${postId}/comments`,
}