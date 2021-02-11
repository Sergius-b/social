import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  if(!props.profile) {
    return <div>
    <img className={s.avatarImg} src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"></img>
  </div>
  }
  return (
    <div>
      <div>
        <img src="https://s1.1zoom.ru/big0/356/433305-Kysb.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
      </div>
    </div>
  )
}

export default ProfileInfo;