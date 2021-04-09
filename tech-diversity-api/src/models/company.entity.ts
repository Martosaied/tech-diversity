import {
	BeforeInsert,
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({
	name: 'techdiversity',
})
export class Company {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ name: 'Date' })
	date: string;

	@Column({ name: 'Type' })
	type: string;

	@Column({ name: 'Company' })
	company: string;

	@Column({ type: 'decimal', name: 'Female %' })
	femaleRate: number;

	@Column({ type: 'decimal', name: 'Male %' })
	maleRate: number;

	@Column({ type: 'decimal', name: '% White' })
    whiteRate: number;
    
    @Column({ type: 'decimal', name: '% Asian' })
    asianRate: number;
    
    @Column({ type: 'decimal', name: '% Latino' })
	latinoRate: number;
    
	@Column({ type: 'decimal', name: '% Black' })
    blackRate: number;

	@BeforeInsert()
	beforeInsert(): void {
		this.id = uuid();
	}

	constructor(
        date?: string,
		type?: string,
		company?: string,
		femaleRate?: number,
		maleRate?: number,
		whiteRate?: number,
		asianRate?: number,
		latinoRate?: number,
		blackRate?: number,
	) {
        this.date = date,
		this.type = type;
		this.company = company;
		this.femaleRate = femaleRate;
		this.maleRate = maleRate;
		this.whiteRate = whiteRate;
		this.asianRate = asianRate;
		this.latinoRate = latinoRate;
		this.blackRate = blackRate;
	}
}
