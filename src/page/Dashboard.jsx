import '../App.css';

const DashBoard = () => {
  return (
    <div className="dashboard">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-buttons">
          <button className="nav-button">HOME</button>
          <button className="nav-button">CONTENT</button>
          <button className="nav-button">USER MANUAL</button>
          <button className="nav-button">CONTACT</button>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="menu-container">
        <h2>เลือกเมนู</h2>
        <button className="main-button">สร้างการนัดหมายใหม่</button>
        <div className="sub-buttons">
          <button className="sub-button">ข้อมูลลูกค้า</button>
          <button className="sub-button">ตรวจสอบตารางนัดหมาย</button>
          <button className="sub-button">จัดการคลินิก</button> {/* Additional button */}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
