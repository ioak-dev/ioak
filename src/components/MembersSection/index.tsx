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
    <div className="members-section">
      <div className="members-section__header">
        <div className="members-section__header__title">
          Our Active Members
        </div><div className="members-section__header__action">
          VIEW ALL OUR MEMBERS
        </div>
      </div>
      <div className="members-section__main">
        {members.map((item: any) =>
        (
          <div className="members-section__main__tile">
            <img className="members-section__main__tile__img" src={item.profilePic} />
            <div className="members-section__main__tile__label" >{item.firstName}</div>
          </div>
        )
        )}
      </div>
    </div>
  )
}
