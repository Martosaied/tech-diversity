import { Min, Max, IsDefined } from 'class-validator';

export class CompanyDto {
	date: string;

	type: string;

	company: string;

	@Min(0)
	@Max(100)
	femaleRate: number;

	@Min(0)
	@Max(100)
	maleRate: number;

	@Min(0)
	@Max(100)
    whiteRate: number;

	@Min(0)
	@Max(100)
    asianRate: number;

	@Min(0)
	@Max(100)
	latinoRate: number;

	@Min(0)
	@Max(100)
    blackRate: number;
}
