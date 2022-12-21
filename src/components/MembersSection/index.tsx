import React, { useEffect, useState } from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import { httpGet } from "../Lib/RestTemplate";


interface Props {
}

export default function MembersSection(props: Props) {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    httpGet("/api/member", {}).then((response: any) => {
      setMembers(response.data);
    })
      .catch((error: any) => {
      })
  }, [])

  return (
    <div className="members-section column-layout">
      <div className="members-section__header">
        <div className="members-section__header__title">
          Our Active Members
        </div>
      </div>
      <div className="members-section__main">
        {members.map((item: any) =>
        (
          <div className="members-section__main__tile">
            <img className="members-section__main__tile__img" src={item.profilePic || 'https://images.unsplash.com/photo-1516737488405-7b6d6868fad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjk0OTh8MHwxfHNlYXJjaHw0fHxiYWxsZXR8ZW58MHwwfHx8MTYyMTMzODkyNA&ixlib=rb-1.2.1&q=80&w=1080'} />
            <div className="members-section__main__tile__label" >
              <div className="members-section__main__tile__label__name" >
              {item.firstName} {item.lastName}
              </div>
              <div className="members-section__main__tile__label__role" >
                {item.jobTitle || 'Community member'}
              </div>
            </div>
          </div>
        )
        )}
      </div><a className="members-section__header__action" href="https://members.ioak.io/#/member-list" target="_blank">
          VIEW ALL OUR MEMBERS
        </a>
    </div>
  )
}
