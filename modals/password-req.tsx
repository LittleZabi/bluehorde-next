import Modal from "../components/modal";
import { useState } from "react";
export function PassReq({ callback }) {
  const [modalDestroy, setModalDestroy] = useState(false);
  return (
    <Modal title='Confirm' modalDestroy={modalDestroy}>
      <div className='max-450'>
        <span className='db'>
          Do you want to change your password! click on yes to confirm that.
          next time enter your new password to login. make sure you entered a
          strong password.
        </span>
        <div className='mt-10'>
          <button className='modal-btn' onClick={callback}>
            Yes
          </button>
          <button
            onClick={() => setModalDestroy(true)}
            className='modal-btn btn-2'
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}
