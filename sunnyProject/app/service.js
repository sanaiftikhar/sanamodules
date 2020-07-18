import { db } from './fire';

export const saveChart=(post)=>{
    db.ref('users/savechart').push({
name:post
    })
}
export const saveNews=(post)=>{
    db.ref('users/saveNews').push({
name:post
    })
}

export const addPost =  (post) => {
    db.ref('users/usersPost/').push({
        name: post
    });
}
export const likePost =  (post) => {
    db.ref(`users/${uid}/likedPosts`).push({
        name: post
    });
}

export const updateBio=(bio)=>{
   db.ref('users/updateBio').update({
        bio
    });
}