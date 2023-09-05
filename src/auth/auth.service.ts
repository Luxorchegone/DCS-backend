import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByCond({
      email,
      password,
    });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserEntity) {
    const payload = { email: user.email };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validate(dto: any) {
    const user = await this.usersService.findByCond({
      email: dto.email,
    });
    if (user && user.email) {
      const { email } = user;
      return { email };
    }
    return null;
  }
}
