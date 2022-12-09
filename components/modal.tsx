import { FaTimesCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function Modal(props: any) {
  const [closeModal, setCloseModal] = useState<boolean>(false);
  const [modal, setModal] = useState(true);
  const handleCloseModal = () => {
    setCloseModal(true);
    setTimeout(() => {
      setModal(false);
    }, 1000);
  };
  useEffect(() => {
    if (props.modalDestroy) handleCloseModal();
  }, [props]);

  return (
    <>
      {modal ? (
        <div className={"modal-x"}>
          <div
            className={
              !closeModal
                ? "full-size modal-x-bg  flex flex-center"
                : "full-size flex flex-center"
            }
          >
            <div
              className={closeModal === false ? "fade-in-eff" : "fade-out-eff"}
            >
              <div className='modal-x-body bg-w  c-b fade-in-eff'>
                <picture>
                  <img
                    className='modal-x-title-bg'
                    src='/media/assets/header-bg.svg'
                    alt='bg'
                  />
                </picture>
                <div className='modal-x-sup'>
                  <div className='modal-x-title df jc-sb ac'>
                    <div>{props.title && props.title}</div>
                    <div
                      className='modal-close'
                      title='close modal'
                      onClick={handleCloseModal}
                    >
                      <FaTimesCircle />
                    </div>
                  </div>
                  <div className='p-20'>{props.children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
