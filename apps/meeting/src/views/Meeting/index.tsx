// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  VideoTileGrid,
  UserActivityProvider
} from 'amazon-chime-sdk-component-library-react';

import { StyledLayout, StyledContent } from './Styled';
import NavigationControl from '../../containers/Navigation/NavigationControl';
import { useNavigation } from '../../providers/NavigationProvider';
import MeetingDetails from '../../containers/MeetingDetails';
import MeetingControls from '../../containers/MeetingControls';
import useMeetingEndRedirect from '../../hooks/useMeetingEndRedirect';
import { RealitimeSubscribeStateProvider } from '../../providers/RealtimeSubscribeProvider';

const MeetingView = () => {
  useMeetingEndRedirect();
  const { showNavbar, showRoster, showChat } = useNavigation();

  return (
    <UserActivityProvider>
      <StyledLayout showNav={showNavbar} showRoster={showRoster || showChat}>
      <RealitimeSubscribeStateProvider>

        <StyledContent>\
          <VideoTileGrid
            className="videos"
            noRemoteVideoView={<MeetingDetails />}
          />
          <MeetingControls />
        </StyledContent>
        <NavigationControl />
        </RealitimeSubscribeStateProvider>
      </StyledLayout>
    </UserActivityProvider>
  );
};

export default MeetingView;