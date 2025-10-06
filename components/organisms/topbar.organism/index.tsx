'use client';

import LoginSignUpDialog from '@/components/molecules/login-sign-up-dialog.molecule';
import TopBarMenu from '@/components/molecules/top-bar-menu.molecule';
import useDialog from '@/hooks/general/useDialog';

const TopBar = () => {
  const authDialog = useDialog();

  console.log('authDialog ', authDialog.visible);

  return (
    <>
      <div className='global-top-bar'>
        <div className='global-top-bar-container'>
          <div></div>
          <TopBarMenu authDialog={authDialog} />
        </div>
      </div>

      <LoginSignUpDialog open={authDialog.visible} onClose={authDialog.close} />
    </>
  );
};

export default TopBar;
