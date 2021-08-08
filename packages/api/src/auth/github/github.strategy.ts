import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';

import { env } from '@/common/env';

import { UsersMapper } from '../../users/users.mapper';
import { UserFromGithub } from '../../users/users.types';
import type { GithubUser } from './github.types';

interface GithubResponse {
  _json: GithubUser;
}

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      callbackUrl: env.GITHUB_CALLBACK_URL,
      scope: ['read:user'],
    });
  }

  validate(_token: string, _refreshToken: string | undefined, { _json }: GithubResponse): UserFromGithub {
    return UsersMapper.fromGithubToDomain(_json);
  }
}