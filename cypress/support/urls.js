const baseApiUrl = 'https://api.hr.constel.co/api/v1';

export const apiUrl = {
    login: `${baseApiUrl}/login`,
    createPost: `${baseApiUrl}/posts`,
    getComments: (postId) => `${baseApiUrl}/posts/${postId}/comments`,
    likePost: (postId) => `${baseApiUrl}/posts/${postId}/like`,
    createComment: (postId) => `${baseApiUrl}/posts/${postId}/comments`,
}