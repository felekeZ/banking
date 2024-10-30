import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
  const loggedIn = {firstName: 'Feleke', lastName:'Zerihun', email:'feleke@gmail.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
           type="greeting"
           title="Welcome"
           user={loggedIn?.firstName || 'Guest'}
           subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1230.5}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar 
         user={loggedIn}
         transactions={[]}
         banks={[{currentBalance: 1250}, {currentBalance: 345}]}/>
    </section>
  )
}

export default Home